const request = window.indexedDB.open("database", 1);

// Create schema
request.onupgradeneeded = event => {
    const db = event.target.result;
    
    const invoiceStore = db.createObjectStore("invoices", { keyPath: "invoiceId" });
    invoiceStore.createIndex("VendorIndex", "vendor");
    
    const itemStore = db.createObjectStore("invoice-items", { keyPath: ["invoiceId", "row"] });
    itemStore.createIndex("InvoiceIndex", "invoiceId");
    
    const fileStore = db.createObjectStore("attachments", { autoIncrement: true });
    fileStore.createIndex("InvoiceIndex", "invoiceId");    
};

request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(["invoices", "invoice-items"], "readwrite");
    const invStore = transaction.objectStore("invoices");
    const itemStore = transaction.objectStore("invoice-items");
    const invIndex = invStore.index("VendorIndex");
  
    // Add data
    invStore.add({invoiceId: "111", vendor: "Whirlpool", paid: false});
    itemStore.add({invoiceId: "111", row: "1", item: "Dish washer", cost: 1400});
    itemStore.add({invoiceId: "111", row: "2", item: "Labor", cost: 500});
    
    invStore.add({invoiceId: "777", vendor: "Whirlpool", paid: true});
    itemStore.add({invoiceId: "777", row: "1", item: "Rubber hose", cost: 20});
    
    // Update an item
    itemStore.put({invoiceId: "111", row: "1", item: "Dish washer", cost: 1300});
    
    // Delete an item
    itemStore.delete(["111", "2"]);
    
    // Get an item by key
    const getRequest = invStore.get("111");
    getRequest.onsuccess = () => {
        console.log(getRequest.result); // {invoiceId: "123", vendor: "Whirlpool", paid: false}
    };
    
    // Get an item by index
    const getRequestIdx = invIndex.getAll("Whirlpool");
    getRequestIdx.onsuccess = () => {
        console.log(getRequestIdx.result); // [ {invoiceId: "123", vendor: "Whirlpool", paid: false},
    };                                     //   {invoiceId: "580", vendor: "Whirlpool", paid: true} ]
};
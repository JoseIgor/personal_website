class Skill {
  constructor(name, level, projects) {
    this.name = name;
    this.level = level;
    this.projects = projects;
    document.styleSheets[1].addRule(".skill__level--" +
      this.name.toLowerCase(),"background-image: linear-gradient(135deg, rgb(31, 35, 43)" +
      this.level.toString()+ "%, rgb(141, 150, 171)" + this.level.toString()+ "%);" ,
      document.styleSheets[1].rules.length);
  }
}

class SkillProject {
  constructor(name, href) {
    this.name = name;
    this.href = href;
  }
}

var proj_1 = new SkillProject('Project-1','#');
var proj_2 = new SkillProject('Project-2','#');
var proj_3 = new SkillProject('Project-3','#');

var htmlSkill = new Skill('HTML', 90, [proj_1]);
var cssSkill = new Skill('CSS', 90, [proj_1, proj_2]);
var javascriptSkill = new Skill('Javascript', 50, [proj_1, proj_2, proj_3]);
var reactSkill = new Skill('React', 40, [proj_1, proj_2, proj_3]);
var nodejsSkill = new Skill('Nodejs', 10, [proj_1, proj_2, proj_3]);
var mongodbSkill = new Skill('MongoDB', 0, [proj_1, proj_2, proj_3]);
var gitSkill = new Skill('Git', 70, [proj_1, proj_2, proj_3]);
var jestSkill = new Skill('Jest', 10, [proj_1, proj_2, proj_3]);


var skills = [htmlSkill, cssSkill, javascriptSkill,reactSkill, nodejsSkill, 
              mongodbSkill, gitSkill, jestSkill];

var $ = document.querySelector('.skill__group');


var skillsHTML = "";
skills.forEach( (_skill) =>{
  skillsHTML += "<div class=\"skill\">" +
                  "<p class=\"skill__tag\">" + _skill.name + ":</p>" + 
                  "<div class=\"skill__level skill__level--"+ _skill.name.toLowerCase() +"\">" +
                  "<div class=\"skill__popup\">" +
                    "<p>Projects & Courses</p>" +
                    "<ul>";
  for (let index = 0; index < _skill.projects.length; index++) {
    skillsHTML +=  "<li><a href=\""+ _skill.projects[index].href +"\" class=\"skill__popup-item\" >" + _skill.projects[index].name + "</a></li>";
  }
  skillsHTML +=     "</ul>" +
                  "</div>" +
                "</div>" +
                "</div>";
});

$.insertAdjacentHTML('beforeend',skillsHTML);

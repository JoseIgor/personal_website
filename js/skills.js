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


skills.forEach( (_skill) =>{
  var skillHtml, skillMarkup, skillprojs, skillProjMarkup; 

  skillMarkup = '<div class="skill">'+
                '<p class="skill__tag">%skillName%:</p>'+
                '<div class="skill__level skill__level--%skillNameLowercase%">'+
                  '<div class="skill__popup">'+
                    '<p>Projects &amp; Courses</p>'+
                    '<ul>'+
                      '%projects%'+
                    '</ul>'+
                  '</div>'+
                '</div>'+
              '</div>';

  skillprojs = "";
  _skill.projects.forEach( proj => {
    skillprojs +=  '<li><a href="%#%" class="skill__popup-item">%projecName%</a></li>';
    skillprojs =  skillprojs.replace('%#%', proj.href);
    skillprojs =  skillprojs.replace('%projecName%', proj.name);
  });


  skillHtml = skillMarkup.replace('%skillName%', _skill.name);
  skillHtml = skillHtml.replace('%skillNameLowercase%', _skill.name.toLowerCase());
  skillHtml = skillHtml.replace('%projects%', skillprojs);
  $.insertAdjacentHTML('beforeend',skillHtml);

});


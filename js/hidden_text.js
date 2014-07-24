function hiddenTextReveal (getElements) {
  this.divBlog = getElements.divBlog;
  this.paragraphBlog = getElements.paragraphBlog;
  this.heading = getElements.heading;
}
hiddenTextReveal.prototype.showParagraph = function(currentHeading) {
  this.paragraphBlog.hide();
  currentHeading.next().show();
};

hiddenTextReveal.prototype.bindEvents = function() {
  var _this = this;  
  this.heading.on("click",function(e) {
    _this.showParagraph($(this));
    e.preventDefault();
  });
};

$(function() {
  var elements = {
    "divBlog" : $("#blog"), 
    "paragraphBlog" : $(".excerpt"),
    "heading" : $("#blog").find("h3")
  };
  var hiddenTextRevealer = new hiddenTextReveal(elements);
  hiddenTextRevealer.bindEvents();   
});
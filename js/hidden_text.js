function hiddenTextReveal (getElements) {
  this.divBlog = getElements.divBlog;
  this.paragraphBlog = getElements.paragraphBlog;
  this.heading = getElements.heading;
}
hiddenTextReveal.prototype.showParagraph = function(currentHeading) {
  $(".excerpt:visible").hide();
  currentHeading.next(".excerpt").show();
};

hiddenTextReveal.prototype.bindEvents = function() {
  var _this = this;  
  this.heading.on("click", function(e) {
    e.preventDefault();
    _this.showParagraph($(this));
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
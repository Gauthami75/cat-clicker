var viewModel = function(){
    this.clickCount = ko.obsevable(0);
    this.name = ko.obsevable('patty');
    this.imgurl=ko.observable('cat1.jpg');

    this.incrementCounter=function(){
      this.clickCount(this.clickCount+1);
    };
  }
  ko.applyBindings(new viewModel());
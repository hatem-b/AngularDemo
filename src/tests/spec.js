var sleep = function(){
	browser.driver.sleep(1000);
};


describe('AngularCars Demo App', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('AngularCars');
  });

  it('should navigate to all application pages', function() {
    
    
    element(by.id('enter')).click();
    expect(browser.getCurrentUrl()).toContain('cars/list/cards');
    sleep();
    element(by.id('bt_add')).click();
    //sleep();
    expect(browser.getCurrentUrl()).toContain('cars/add');
    //sleep();
    element(by.id('bt_list')).click();
    sleep();
    element(by.id('bt_table')).click();
    //sleep();
    expect(browser.getCurrentUrl()).toContain('cars/list/table');

	sleep();
    // second row => below header
    element.all(by.tagName('tr')).get(1).click();

    expect(browser.getCurrentUrl()).toContain('cars/');

  });
});
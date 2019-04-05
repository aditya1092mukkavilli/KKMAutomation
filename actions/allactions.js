export  class Actions { 
    static enterValues(type, typeValue, valuesToSend){
        switch(type){
            case model:
                element(by.model(typeValue).sendKeys(valuesToSend));
                break;
            case css:
                 element(by.css(typeValue).sendKeys(valuesToSend));
                 break;
        }       
    } 
    static click(type, elementToClick){
        switch(type){
            case model:
                 element(by.model(elementToClick)).click();
                 break;
            case css:
                 element(by.model(elementToClick)).click();
                 break;
            case id: 
                 eleemnt(by.id(elementToClick)).click();
                 break;
        }

    }
}

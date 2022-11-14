

    let person;
    let name = 'xiaoming';
    let age = 12;
    let test
    let firend;
    {
        //一个代码块 在这里定义的name和age与外面的不冲突 且作用域只在这里面
        let name = 'dali';
        let age = 13;
        firend = {name,age};
        //这里的friend直接使用了外面的


        // var test
        //var不存在代码块 因此会和外面的test冲突
    }
    person = {name,age,firend};
    console.log(person);  
    
    
    if(true){
        let name = 'if'
        //if也是一个代码块
    }
    else{
        let name = 'if'
    }


    for (let name = 0; name < 10; name++) {
        // 每一次循环都是一个代码块 这里有10个代码块
    }



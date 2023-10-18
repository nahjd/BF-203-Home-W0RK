//Task1
//Ad, yaş və ölkə xüsusiyyətləri ilə "Şəxs" adlı sinif yaratmaq üçün JavaScript proqramı yazın. Şəxsin təfərrüatlarını göstərmək üçün bir üsul daxil edin. "Şəxs" sinfinin iki nümunəsini yaradın və onların təfərrüatlarını göstərin.
// class Human {
//     constructor(name, age, country) {
//       this.name = name;
//       this.age = age;
//       this.country = country;
//     }
  
//     getClassInfo() {
//       console.log(`Name: ${this.name}`);
//       console.log(`Age: ${this.age}`);
//       console.log(`Country: ${this.country}`);
//     }
//   }
  
//   const person1 = new Human(' Memmedov Nahid', 19, 'Azerbaijan');
//   const person2 = new Human('Raimond Aruna', 30, 'Netherlands');
  
//   console.log('Person-1 Details:');
//   person1.getClassInfo();
  
 
//   console.log('\nPerson-2 Details:');
//   person2.getClassInfo();
  
//Task2
// Genişlik və hündürlük xüsusiyyətləri ilə 'Düzbucaqlı' adlı sinif yaratmaq üçün JavaScript proqramı yazın. Düzbucaqlının sahəsini və perimetrini hesablamaq üçün iki üsul əlavə edin. 'Düzbucaqlı' sinifinin nümunəsini yaradın və onun sahəsini və perimetrini hesablayın.
//   class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }

//   calculatePerimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const rectangle = new Rectangle(25, 2);


// const area = rectangle.calculateArea();
// const perimeter = rectangle.calculatePerimeter();


// console.log(`Rectangle Area: ${area}`);
// console.log(`Rectangle Perimeter: ${perimeter}`);


//Task3
//Marka, model və il üçün xassələri olan 'Vehicle' adlı sinif yaradan JavaScript proqramını yazın. Avtomobilin təfərrüatlarını göstərmək üçün bir üsul daxil edin. 'Avtomobil' sinfindən miras qalan və qapıların sayı üçün əlavə xüsusiyyəti özündə birləşdirən 'Avtomobil' adlı alt sinif yaradın. Qapıların sayını daxil etmək üçün ekran üsulunu ləğv edin.

// class Vehicle{
//     constructor(marka,model,year){
//         this.marka=marka;
//         this.model=model;
//         this.year=year;
//     }
//     displayDetails(){
//         console.log(`marka: ${this.marka}`);
//         console.log(`model: ${this.model}`);
//         console.log(`year: ${this.year}`);
//     }
    
// }
// class Avtomobil extends Vehicle{
//     constructor(marka,model,year,doors){
//         super(marka,model,year);
//         this.doors=doors;
// }
// displayDetails(){
//     super.displayDetails();
//     console.log(`Doors: ${this.doors}`);
// }
// }
// let vehicle = new Vehicle('BMW' , 'G-450' , '2017');
// console.log('Vehicle Details:');
// vehicle.displayDetails();

// let avtomobil = new Avtomobil('Mercedes', 'n-132', 2022, 4);


// console.log('\nAvtomobil Details:');
// avtomobil.displayDetails();

//Task4
//Hesab nömrəsi və balans üçün xüsusiyyətləri olan "BankAccount" adlı sinif yaradan JavaScript proqramını yazın. Hesabdan pul yatırmaq və çıxarmaq üsullarını daxil edin. "BankAccount" sinifinin bəzi nümunələrini yaradın, bir qədər pul qoyun və onun bir hissəsini çıxarın.

// class BankAccount {
//     constructor(accountNumber, balance) {
//       this.accountNumber = accountNumber;
//       this.balance = balance;
//       console.log(`A/c No.: ${accountNumber}`);
//       console.log(`Opening Balance: $${balance}`);    
//     }
//     deposit(amount) {
//       this.balance += amount;
//       console.log(`Deposited: $${amount}`);
//     }
//     withdraw(amount) {
//       if (amount <= this.balance) {
//         this.balance -= amount;
//         console.log(`Withdrawn: $${amount}`);
//       } 
//       else 
//       {
//         console.log(`Want to withdrawn: $${amount}`);
//         console.log('Insufficient balance');
//       }
//     }
//     displayBalance() {
//       console.log(`Account Balance: $${this.balance}`);
//     }
//   }
//   const account = new BankAccount('60-140', 1700);
//   account.deposit(500);
//   account.withdraw(400);
//   account.displayBalance();
//   account.withdraw(1800);
//   account.displayBalance();
//Task5 
//Sahənin hesablanması metodu ilə 'Shape' adlı sinif yaradan JavaScript proqramını yazın. "Forma" sinfindən miras qalan və sahə hesablama metodunu ləğv edən "Dairə" və "Üçbucaq" adlı iki alt sinif yaradın. "Circle" sinfinin nümunəsini yaradın və onun sahəsini hesablayın. Eynilə, "Üçbucaq" sinfi üçün də eyni şeyi edin.
// class Shape {
//     calculateArea() {}
     
//   }
  
//   class Circle extends Shape {
//     constructor(radius) {
//       super();
//       this.radius = radius;
//     }
  
//     calculateArea() {
//       return Math.PI * this.radius * this.radius;
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(width, height) {
//       super();
//       this.width = width;
//       this.height = height;
//     }
  
//     calculateArea() {
//       return this.width * this.height;
//     }
//   }
  
//   const circle = new Circle(6);
//   const circleArea = circle.calculateArea();
//   console.log(`Circle Area: ${circleArea}`);
  
//   const rectangle = new Rectangle(5, 7);
//   const rectangleArea = rectangle.calculateArea();
//   console.log(`Rectangle Area: ${rectangleArea}`);
  
//Task6
//Ad və əmək haqqı xüsusiyyətləri ilə 'İşçi' adlı sinif yaradan JavaScript proqramı yazın. İllik əmək haqqının hesablanması metodunu daxil edin. 'İşçi' sinfindən miras qalan və şöbə üçün əlavə xüsusiyyət əlavə edən 'Menecer' adlı alt sinif yaradın. Menecerlər üçün bonusları daxil etmək üçün illik əmək haqqının hesablanması metodunu ləğv edin. "Menecer" sinfinin iki nümunəsini yaradın və onların illik maaşını hesablayın.
// class Employee {
//     constructor(name, salary) {
//       this.name = name;
//       this.salary = salary;
//       console.log(`Name of the Employee: ${name}`);
//       console.log(`Monthly Salary: $${salary}`);
//     }
  
//    calculateSalary() {
//       return this.salary * 12;
//     }
//   }
  
//   class Manager extends Employee {
//     constructor(name, salary, department) {
//       super(name, salary);
//       this.department = department;
//     }
  
//     calculateSalary() {
//       const baseSalary = super.calculateSalary();
//       const bonus = 0.1; 
//       console.log(`Bonus (10% of the base salary): ${bonus}`);
//       return (bonus * baseSalary) + baseSalary;
//     }
//   }
  
  
//   const manager1 = new Manager('Joe Smith', 3000, 'Marketing');
//   const annualSalary1 = manager1.calculateSalary();
  
//   console.log(`Manager: ${manager1.name}`);
//   console.log(`Department: ${manager1.department}`);
//   console.log(` Salary: $${annualSalary1}`);
 
//   const manager2 = new Manager('Angelina jolie', 5000, 'Marketing');
//   const annualSalary2 = manager2.calculateSalary();
  
//   console.log(`Manager: ${manager2.name}`);
//   console.log(`Department: ${manager2.department}`);
//   console.log(`Annual Salary: $${annualSalary2}`);
  

//Task7
//Başlıq, müəllif və nəşr ili üçün xassələri olan “Kitab” sinfini yaradan JavaScript proqramını yazın. Kitab təfərrüatlarını göstərmək üçün bir üsul əlavə edin. "Kitab" sinfindən miras qalan və kitab qiymətinə əlavə mülkiyyəti özündə birləşdirən "Ebook" adlı alt sinif yaradın. Kitabın qiymətini daxil etmək üçün ekran üsulunu ləğv edin. 'Ebook' sinifinin nümunəsini yaradın və onun təfərrüatlarını göstərin.
// class Book {
//     constructor(title, author, publicationYear) {
//       this.title = title;
//       this.author = author;
//       this.publicationYear = publicationYear;
//     }
  
//     displayDetails() {
//       console.log(`Title: ${this.title}`);
//       console.log(`Author: ${this.author}`);
//       console.log(`Publication Year: ${this.publicationYear}`);
//     }
//   }
  
//   class Ebook extends Book {
//     constructor(title, author, publicationYear, price) {
//       super(title, author, publicationYear);
//       this.price = price;
//     }
  
//     displayDetails() {
//       super.displayDetails();
//       console.log(`Price: $${this.price}`);
//     }
//   }
  
//   const ebook = new Ebook('Lynne Graham', 'Married to a Mistress', 1745, 19.35);
  

//   ebook.displayDetails();
  
//Task8
//Növlər və səs xüsusiyyətləri ilə 'Animal' adlı sinif yaradan JavaScript proqramını yazın. Heyvanın səsini çıxarmaq üçün bir üsul daxil edin. 'Animal' sinfindən miras qalan və rəng üçün əlavə xüsusiyyət əlavə edən 'Dog' adlı alt sinif yaradın. İtin rəngini daxil etmək üçün səs yaratma metodunu ləğv edin. 'Dog' sinifinin bir nümunəsini yaradın və onun səsini çıxarın.

// class Animal {
//     constructor(species, sound) {
//       this.species = species;
//       this.sound = sound;
//     }
  
//     makeSound() {
//       console.log(this.sound);
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(species, sound, color) {
//       super(species, sound);
//       this.color = color;
//     }
  
//     makeSound() {
//       super.makeSound();
//       console.log(`Color: ${this.color}`);
//     }
//   }
  

//   const dog = new Dog('Dog', 'Woof woof!', 'black');

//   dog.makeSound();
  
//Task9
//Bank adları və filialları üçün xassələri olan Bank adlı sinif yaradan JavaScript proqramını yazın. Filial əlavə etmək, filialı silmək və bütün filialları göstərmək üçün üsulları daxil edin. Bank sinfinin nümunəsini yaradın və filialları əlavə etmək və silmək üçün əməliyyatları yerinə yetirin.
// class Bank {
//     constructor() {
//       this.bankName = '';
//       this.branches = [];
//     }
//     addBranch(branch) {
//       this.branches.push(branch);
//       console.log(`${branch} added successfully.`);
//     }
  
//     removeBranch(branch) {
//       const index = this.branches.indexOf(branch);
//       if (index !== -1) {
//         this.branches.splice(index, 1);
//         console.log(`Branch ${branch} removed successfully.`);
//       } 
//       else {
//         console.log(`Branch "${branch}" does not exist.`);
//       }
//     }
  
//     displayBranches() {
//       if (this.branches.length === 0) {
//         console.log('No branches available.');
//       } else {
//         console.log('List of Bank Branches:');
//         this.branches.forEach((branch, index) => {
//           console.log(`${index + 1}. ${branch}`);
//         });
//       }
//     }
//   }
  
//   const bank = new Bank();

//   bank.addBranch('Branch 1');
//   bank.addBranch('Branch 2');
//   bank.addBranch('Branch 3');

//   bank.displayBranches();
//   bank.removeBranch('Branch 3');
//   bank.displayBranches();
  
//Task10
//Məhsul identifikatoru, adı və qiyməti üçün xassələri olan Product adlı sinif yaradan JavaScript proqramını yazın. Qiyməti kəmiyyətə vurmaqla ümumi qiyməti hesablamaq üçün bir üsul daxil edin. Məhsul sinfindən miras qalan və zəmanət müddəti üçün əlavə xüsusiyyət əlavə edən PersonalCareProduct adlı alt sinif yaradın. Zəmanət müddətini daxil etmək üçün ümumi qiymət hesablama metodunu ləğv edin. PersonalCareProduct sinifinin nümunəsini yaradın və onun ümumi qiymətini hesablayın.
// class Product {
//     constructor(id, name, price) {
//       this.id = id;
//       this.name = name;
//       this.price = price;
//     }
  
//     calculateTotalPrice(quantity) {
//       return this.price * quantity;
//     }
//   }
  
//   class PersonalCareProduct extends Product {
//     constructor(id, name, price, warrantyPeriod) {
//       super(id, name, price);
//       this.warrantyPeriod = warrantyPeriod;
//     }
  
//     calculateTotalPrice(quantity) {
//       const totalPrice = super.calculateTotalPrice(quantity);
//       return totalPrice + this.warrantyPeriod;
//     }
//   }
  
 
//   const personalCareProduct = new PersonalCareProduct(3, 'bamboo', 25, 2);
  
  
//   const totalPrice = personalCareProduct.calculateTotalPrice(3);
  
//   console.log(`Total Price: $${totalPrice}`);
  
//Task11
//Hesab nömrəsi, hesab sahibinin adı və balans üçün xüsusiyyətləri olan BankAccount adlı sinif yaradan JavaScript proqramı yazın. Hesablar arasında pul qoymaq, çıxarmaq və köçürmək üsullarını daxil edin. BankAccount sinifinin çoxsaylı nümunələrini yaradın və pul qoymaq, çıxarmaq və köçürmək kimi əməliyyatları yerinə yetirin.
// class BankAccount {
//     constructor(accountNumber, accountHolderName, balance) {
//       this.accountNumber = accountNumber;
//       this.accountHolderName = accountHolderName;
//       this.balance = balance;
//     }
//     deposit(amount) {
//       this.balance += amount;
//       console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
//     }
  
//     withdraw(amount) {
//       if (amount <= this.balance) {
//         this.balance -= amount;
//         console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
//       } else {
//         console.log(`Insufficient balance in account ${this.accountNumber}.`);
//       }
//     }
  
//     transfer(amount, recipientAccount) {
//       if (amount <= this.balance) {
//         this.balance -= amount;
//         recipientAccount.deposit(amount);
//         console.log(`Amount $${amount} transferred from account ${this.accountNumber} to account ${recipientAccount.accountNumber}.`);
//       } else {
//         console.log(`Insufficient balance in account ${this.accountNumber} for transfer.`);
//       }
//     }
  
//     displayBalance() {
//       console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
//     }
//   }
  
 
//   const account1 = new BankAccount('SB-012', 'Karishma Hedy', 3000);
//   const account2 = new BankAccount('SB-019', 'Phokas Intan', 5000);

//   account1.displayBalance();
//   account2.displayBalance(); 
//   account1.deposit(400);
//   account1.displayBalance();
  
//   account1.withdraw(100); 
//   account1.displayBalance(); 
  
//   account1.transfer(500, account2); 
//   account1.displayBalance(); 
//   account2.displayBalance(); 
  

//Task12
//Universitet adı və bölmələri üçün xassələri olan Universitet adlı sinif yaradan JavaScript proqramını yazın. Şöbə əlavə etmək, şöbəni silmək və bütün şöbələri göstərmək üsullarını daxil edin. Universitet sinfinin nümunəsini yaradın və şöbələri əlavə edin və silin.
class University {
    constructor(name) {
      this.name = name;
      this.departments = [];
    }
  
    addDepartment(department) {
      this.departments.push(department);
      console.log(`Department "${department}" added to ${this.name}.`);
    }
  
    removeDepartment(department) {
      const index = this.departments.indexOf(department);
      if (index !== -1) {
        this.departments.splice(index, 1);
        console.log(`Department "${department}" removed from ${this.name}.`);
      } else {
        console.log(`Department "${department}" does not exist in ${this.name}.`);
      }
    }
  
    displayDepartments() {
      console.log(`Departments in ${this.name}:`);
      if (this.departments.length === 0) {
        console.log('No departments available.');
      } else {
        this.departments.forEach((department, index) => {
          console.log(`${index + 1}. ${department}`);
        });
      }
    }
  }
  

  const university = new University('Baku State Universitety');
  

  university.displayDepartments(); 
  
  university.addDepartment('Programlasdirma');
  university.addDepartment('Difrensial Tenlikler');
  university.addDepartment('Optimallasdirma');
  university.displayDepartments();

  
  university.removeDepartment('Difrensial Tenlikler');
  university.displayDepartments();

  
  university.removeDepartment('The English Langugage');

  
  
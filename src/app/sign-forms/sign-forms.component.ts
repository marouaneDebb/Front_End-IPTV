import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { userService } from 'src/service/user.service';

@Component({
  selector: 'app-sign-forms',
  templateUrl: './sign-forms.component.html',
  styleUrls: ['./sign-forms.component.css']
})
export class SignFormsComponent implements OnInit{
  entredUserName!: String;
  entredEmail!: String;
  entredPassword!: String;

  signMail!: String;
  signPassword!: String;

  userBack!:User;
  usersBack!:User[];
  usersBackTest:User[]=[];

  userFront!:User;
  userFrontRout!:User;


  userExists!:boolean

  userFound!:boolean

  constructor(
    private route: ActivatedRoute,
    private userservice: userService,  private router: Router


  ) {}
  ngOnInit(): void {
    this.getAllUsersFromBackEnd();
    
  }

  addUser() {
    this.userFront = {
      username: this.entredUserName,
      email: this.entredEmail,
      password: this.entredPassword
    };
  
    console.log("this is user front " + this.userFront);
  
    // Check if user exists in the current list
    const userExistsInList = this.usersBack.some(user => user.email === this.userFront.email || user.username === this.userFront.username);
  
    if (userExistsInList) {
      this.userExists = true;
      console.log("User exists");
    } else {
      // Add the user to the backend
      this.addUsertoBackEnd(this.userFront);
      this.userExists = false;

      
      // Refresh the list of users after adding a new user
      this.getAllUsersFromBackEnd();
    }
  }

  signIn(){
    if(this.usersBack.length==0){
          console.log("entring this [] case")
          this.userFound=false
        }
    else{
      this.usersBack.forEach((user)=>{
              if(this.signMail === user.email && this.signPassword === user.password){
                  this.userFound=true
                  this.userFrontRout={username: user.username,
                    email: user.email,
                    password: user.password}  
                    this.router.navigate(['/home', this.userFrontRout.username]);   
              }

    })

  }

}
  

  // addUser(){
  //   this.userFront = {
  //     username:this.entredUserName,
  //     email:this.entredEmail,
  //     password:this.entredPassword
  //   }
  //   console.log("this is user front "+this.userFront)

  //   this.getAllUsersFromBackEnd();


  //   if(this.usersBack.length==0){
  //     console.log("entring this [] case")
  //     this.addUsertoBackEnd(this.userFront)

  //   }
  //   else{
  //     this.usersBack.forEach((user)=>{
  //       if(this.userFront.email === user.email || this.userFront.username === user.username){
  //           this.userExists=true
  //           console.log("user exists")

  //       }
  //     }
  //     )
  //     if(!this.userExists){
  //         console.log("user not exixts")
  //         this.addUsertoBackEnd(this.userFront)

  
  //     };
  //   }

  // }


  addUsertoBackEnd(user:User){
    this.userservice.addUser(user).subscribe(
      (response: User) => {
        console.log("adding user from frontend")
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }

    )
  }

  getUserFromBackEnd(username:String){
    this.userservice.getUser(username).subscribe(
      (response: User) => {
        this.userBack=response;
        console.log("getting user from backend")
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  getAllUsersFromBackEnd(){
    this.userservice.getAllUsers().subscribe(
      (response: User[]) => {
        this.usersBack=response;
        console.log("getting all users from backend")
        console.log(this.usersBack)

      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  


}

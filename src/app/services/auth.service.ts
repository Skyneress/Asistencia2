import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, sendPasswordResetEmail } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
              private auth:Auth

  ) { }

 async register(email: any, password: any){
  const usuario= await createUserWithEmailAndPassword(this.auth, email, password);

}


login(email: any, password: any){
  return signInWithEmailAndPassword(this.auth,email,password);
}

logout() {
  return signOut(this.auth)
}

currentUser() {
  return this.auth.currentUser;
}

async resetPassword(email: any): Promise<void> {
  try {
    return sendPasswordResetEmail(this.auth, email);
  } 
  catch (error) {
    
  }
}
}

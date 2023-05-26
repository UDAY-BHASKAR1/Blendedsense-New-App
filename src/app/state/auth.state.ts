import { User } from "../shared/interface/interface";

export interface AuthState{
    user:User|null;
}

export const initialState:AuthState={
    user:null,
};
import { RouterState } from "connected-react-router";
import { Reducer } from "react";
import { AnyAction } from "redux";
import { AuthState } from "./redux/modules/auth";

export interface BookReqType {
  title: string;
  author: string;
  message: string;
  url: string;
}

export interface BookResType {
  bookId: number;
  title: string;
  author: string;
  message: string;
  url: string;

  createdAt: string;
}

export interface LoginReqType {
  email: string;
  password: string;
}

export interface LoginResType {
  token: string;
}
export interface BooksState {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;
  books: BooksState;
  router: Reducer<RouterState<unknown>, AnyAction>
}

export interface BookType { }

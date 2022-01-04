// Problem
//https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/practice-problems/algorithm/n-queensrecursion-tutorial/

#include <bits/stdc++.h>
using namespace std;

bool is_attacked(int n,int** board,int row,int col){
	for(int i=0;i<col;i++)
		if(board[row][i])	return false;
	
	for(int i=row,j=col; i>=0 && j>=0;i--,j--)
		if(board[i][j])	return false;

	for(int i=row,j=col; i<n && j>=0;i++,j--)
		if(board[i][j])	return false;
	
	return true;
}

bool N_queen(int n,int** board,int col){
	if(col >= n){	return true;}

	for(int i=0;i<n;i++){
		if(is_attacked(n,board,i,col)){
			board[i][col]=1;
			if(N_queen(n,board,col+1)){
				return true;
			}
			board[i][col] = 0;
		}
	}
	return false;
}

int main() {
	int n;
	cin>>n;
	int** board = new int*[n]; 
	for(int i=0;i<n;i++){
		board[i] = new int[n];
		for(int j=0;j<n;j++){
			board[i][j]=0;
		}
	}
	bool flag = N_queen(n,board,0);
	if(flag == false){	cout<<"Not possible\n";}
	else{
		for(int i=0;i<n;i++){
			for(int j=0;j<i;j++){
				if(i != j){
					int tmp = board[i][j];
					board[i][j] = board[j][i];
					board[j][i] = tmp;
				}
			}
		}
		for(int i=0;i<n;i++){
			for(int j=0;j<n;j++){
				cout<<board[i][j]<<" ";
			}
		cout<<"\n";
		}
	}
}


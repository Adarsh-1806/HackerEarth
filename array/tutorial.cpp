//problem
//https://www.hackerearth.com/practice/data-structures/arrays/multi-dimensional/tutorial/

#include <bits/stdc++.h>
using namespace std;

int main() {
	int n,m;
	cin>>n>>m;
	int ar[n][m];
	int ans[m][n];
	for(int i=0;i<n;i++)
		for(int j=0;j<m;j++){
			cin>>ar[i][j];
			ans[j][i] = ar[i][j];
		}
	for(int i=0;i<m;i++){
		for(int j=0;j<n;j++)
			cout<<ans[i][j]<<" ";
		cout<<"\n";
	}
}


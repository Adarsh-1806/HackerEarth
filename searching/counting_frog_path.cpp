//problem
//https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/counting-frog-paths-1abd84d5/

#include <bits/stdc++.h>
using namespace std;

int main() {
	int x,y,s,t;
	cin>>x>>y>>s>>t;
	int ans =0;
	for(int i=x;i<=x+s;i++){
		for(int j=y;j<=y+s;j++){
			if(i+j<=t)	ans++;
		}
	}
	cout<<ans;
}


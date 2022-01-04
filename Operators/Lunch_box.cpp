// Problem
//https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/lunch-boxes-019bf2a5/

#include <bits/stdc++.h>
using namespace std;

int main() {
	long t;
	cin >> t;
	while(t--){
		int n,m;
		cin>>n>>m;
		long school[m];
		for(int i=0;i<m;i++){
			cin>>school[i];
		}
		sort(school,school+m);
		long sum = 0,cnt = 0;
		for(long i=0;i<m;i++){
			sum+=school[i];
			if(sum <= n){ cnt++;}
			else{
				break;
			}
		}
		cout<<cnt<<"\n";
	}
}


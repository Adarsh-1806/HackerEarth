//Problem
// https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/practice-problems/algorithm/find-the-numbers-75f24949/

#include <bits/stdc++.h>
using namespace std;

int main() {
	long n;
	cin>>n;
	long ar[n];
	map<int,int> m;
	for(long i=0;i<n;i++){
		cin>>ar[i];
		m[ar[i]]++;
	}
	for(auto i : m){
		if(i.second <2){
			cout<<i.first<<" ";
		}
	}
}


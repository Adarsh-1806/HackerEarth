// Problem
//https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/practice-problems/algorithm/k-excess-1-be669e5a/

#include <bits/stdc++.h>
#include<iostream>
using namespace std;
#define ll long long int
int main() {
	long t;
	cin >> t;
	while(t--){
		ll n,k;
		cin>>n>>k;
		ll ans =0;
		for(ll i=1;i<=n;i++){
			if(i%k != 0)	ans += i;
			else{
				if((i/k)%k != 0)	ans += (i/k);
				else{
					ans++;
				}
			}
		}
		cout<<ans<<"\n";
	}
}


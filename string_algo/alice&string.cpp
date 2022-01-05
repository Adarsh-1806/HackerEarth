//problem
//https://www.hackerearth.com/practice/algorithms/string-algorithm/basics-of-string-manipulation/practice-problems/algorithm/aliceandstrings-9da62aa7/

#include <bits/stdc++.h>
using namespace std;
#define ll long long
int main() {
	string s1,s2;
	cin>>s1;
	cin>>s2;
	ll l1=s1.size(),l2=s2.size();
	bool flag=false;
	if(l1 != l2) cout<<"NO";
	else{
		for(ll i=0;i<l1;i++){
			if(s1[i] > s2[i] && s1[i]=='z'){
				cout<<"NO";
				flag =true;
				break;
			}
		}
		if(flag == false)	cout<<"YES";
	}
}


//Problem
//https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/mr-x-and-string-4836920e/

#include <bits/stdc++.h>
using namespace std;

int main() {
	int t;
	cin >> t;
	map<char,int> m;
	while(t--){
		int len,cnt = 0;
		cin>>len;
		char s1[len],s2[len];
		cin>>s1>>s2;
		for(int i=0;i<len;i++){
			if(s1[i] != s2[i]){ 
				m[s1[i]]++;
				m[s2[i]]++;
				cnt++;
			}
		}
		if(cnt>2 || m.size()>2)){cout<<"NO\n";}
		else{
			cout<<"YES\n";
		}
	}
}


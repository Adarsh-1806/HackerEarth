//problem
//https://www.hackerearth.com/practice/algorithms/string-algorithm/basics-of-string-manipulation/practice-problems/algorithm/largest-balanced-string-bf93ce85/

#include <bits/stdc++.h>
using namespace std;

int main() {
	long t;
	cin >> t;
	while(t--){
		string s;
		cin>>s;
		map<char,int> m;
		for(int i=0;i<s.size();i++){
			char x = s[i];
			switch(x){
				case '(':
					m['(']++;
					break;
				case ')':
					m[')']++;
					break;
				case '[':
					m['[']++;
					break;
				case ']':
					m[']']++;
					break;
				case '{':
					m['{']++;
					break;
				case '}':
					m['}']++;
					break;
				default:
					break;
			}
		}
		int ans = 0;
		ans+=min(m['('],m[')']);
		ans+=min(m['{'],m['}']);
		ans+=min(m['['],m[']']);
		cout<<ans*2<<"\n";
	}
}


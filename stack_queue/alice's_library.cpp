#include <bits/stdc++.h>
using namespace std;

int main() {
	string s;
	cin>>s;
	stack<int> st;
	for(int i=0;i<s.size();i++){
		if(s[i]=='/')
			st.push(i);
		if(s[i]==92){
			int index = st.top();
			reverse(s.begin()+ index +1,s.begin()+i );
			st.pop();
		}
	}
	for(int i=0;i<s.size();i++){
		if(isalpha(s[i]))
			cout<<s[i];
		
	}
}

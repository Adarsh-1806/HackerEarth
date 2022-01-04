//problem
//https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/practice-problems/algorithm/maximum-occurrence-9/


#include <bits/stdc++.h>
using namespace std;

int main() {
	string s;
	getline(cin, s); //use getline to take input with spaces

	map<char,int> m;	//map for store frequency of char
	for(int i=0;i<s.size();i++){
		m[s[i]]++;		
	}
	
	int max=0;
	char ans;
	//check for highest frequency
	for(auto i:m){
		if((i.second > max)){
			ans = i.first;
			max = i.second;
		}
	}
	cout<<ans<<" "<<max;
}


//problem
//https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/find-the-vaccine-a60e06ee/

#include <bits/stdc++.h>

using namespace std;

int main() {
	int t,n,ans,mx=-1,cnt=1,interaction=0;
	cin >> t;
	cin >> n;
	char virus[n];
	cin >> virus; 
	map<char,int> m;
	map<char,int> vec;
	for(int i=0;i<n;i++){
		if(virus[i]=='C' || virus[i]=='G'){
			m[virus[i]]++;
		}
	}
	while(t--){
		int len;
		cin >> len;
		char vaccine[len];
		cin >> vaccine;
		vec['C']=0;
		vec['G']=0;
		for(int i=0;i<len;i++){
			if(vaccine[i]=='C' || vaccine[i]=='G'){
			vec[vaccine[i]]++;
			}
		}
		interaction = vec['G']*m['C'] + vec['C']*m['G'] ;
		if(interaction > mx){
			mx = interaction;
			ans = cnt;
		}
		interaction =0;
		cnt++;
	}
	 cout<<ans;
	// cout<<m['C']<<" "<<m['G'];
	// cout<<vec['C']<<" "<<vec['G'];
}


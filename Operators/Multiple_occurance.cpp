//problem
//https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/multiple-occurence-97c00160/

#include <bits/stdc++.h>
#define ll long long int;
using namespace std;

int main() {
	long t;
	cin >> t;
	while(t--){
		long n;
		cin>>n;
		long ar[n];
		map<int,int> freq;
		map<int,int> start;
		map<int,int> end;
		for(long i=0;i<n;i++){
			cin>>ar[i];
			freq[ar[i]]++;
			if(freq[ar[i]]==1){
				start[ar[i]] = i+1;
			}
			else{
				end[ar[i]] = i+1;
			}
		}
		long ans=0;
		map<int,int>::iterator i;
		for(i=freq.begin();i!=freq.end();i++){
			if(i->second >1){
				ans += (end[i->first]-start[i->first]);
			}
		}
		cout<<ans<<"\n";
	}
}


//Problem
// https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/sum-as-per-frequency-88b00c1f/


#include <bits/stdc++.h>
using namespace std;

int main() {
	long t;
	cin >> t;
	long ar[t];
	map<long,long> freq;
	for(long i=0;i<t;i++){
		cin>>ar[i];
		freq[ar[i]]++; //count frequncy of number
	}
	map<long,long> sum;
	for(auto i:freq){
		sum[i.second] += (i.first*i.second);
	}
	//input query
	long q;
	cin>>q;
	for(long i=0;i<q;i++){
		long l,r;
		cin>>l>>r;
		long ans =0;
		for(auto i: sum){
			if(i.first <=r && i.first>=l){
				ans += i.second;
			}
		}
		cout<<ans<<"\n";
	}
}


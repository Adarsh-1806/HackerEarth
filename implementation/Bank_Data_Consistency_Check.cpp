//Problem
//https://www.hackerearth.com/problem/approximate/bank-data-consistency-check-3899a127/?source=list_view

#include <bits/stdc++.h>
#define ll long long;
using namespace std;

int main() {
	vector<pair<long,long>> v;
	map<long,long> m;
	while(1){
		long x,y;
		pair<long,long> p1;
		cin>>x>>y;
		p1.first=x;
		p1.second=y;

		if(x==-1){ break;}
		v.push_back(p1);	//acc & debit card number pairs

		m[p1.first]++;    //frequncy of numbers
		m[p1.second]++;

	}

	for(long i=0;i<v.size();i++){
		if(m[v[i].first]>1){ cout<<"0 1\n";}
		else if(m[v[i].second]>1){ cout<<"1 0\n";}
		else { cout<<"-1 -1\n";}
	}
	return 0;
}


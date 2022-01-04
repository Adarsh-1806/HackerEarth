//Problem: basic hash table

#include <bits/stdc++.h>
using namespace std;

int main() {
	long t;
	cin >> t;
	// vector<string> hashTable[t];
	map<int,string> m;
	// long index;
	while(t--){
		long index;
		string name;
		cin>>index>>name;
		m[index] = name;
	}
	long x;
	cin>>x;
	// cout<<hashTable.size();
	while(x--){
		long inx;
		cin>>inx;
		cout<<m[inx]<<"\n";
	}
}


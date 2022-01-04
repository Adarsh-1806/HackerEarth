//problem
//https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/practice-problems/algorithm/equal-elements-2-db70c1ae/

#include <bits/stdc++.h>
using namespace std;

int main() {
	long t;
	cin >> t;
	while(t--){
		long n;
		cin>>n;
		long ar[n],odd=0,even=0;
		for(long i=0;i<n;i++){
			cin>>ar[i];
			if(ar[i]%2 == 0){	even++;}
			else{odd++;}
		}
		cout<<min(odd,even)<<endl;
	}
}


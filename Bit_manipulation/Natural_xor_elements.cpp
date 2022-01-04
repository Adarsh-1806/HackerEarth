//Problem
// https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/practice-problems/algorithm/natural-xor-25d22168/

#include <bits/stdc++.h>
using namespace std;

int main() {
	int t;
	cin >> t;
	while(t--){
		long n;
		cin>>n;
		int val = n%4;
		switch(val){
			case 1:
				cout<<1<<" "<<1<<"\n";
				break;
			case 2:
				cout<<2<<" "<<n<<" "<<1<<"\n";
				break;
			case 3:
				cout<<0<<"\n";
				break;
			case 0:
				cout<<1<<" "<<n<<"\n";
				break;
			default :
				break;
		}
	}
}


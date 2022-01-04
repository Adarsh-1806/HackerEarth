//Problem
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/distribute-chocolates-70c2c2ab/

#include <bits/stdc++.h>
#define ll long long;
using namespace std;

int main() {
	int t;
	cin >> t;
	while(t--){
		long c,n;
		cin>>c>>n;
		long chocolate_diff = (n*(n+1))/2;
		if(chocolate_diff>c)	{ cout<<c<<"\n";}
		else{
			long remaining_choco = c - chocolate_diff;
			cout<<remaining_choco%n<<"\n";
		}
	}
}


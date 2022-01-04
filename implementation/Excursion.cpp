//Problem
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/excursion-2d080f3a/

#include <bits/stdc++.h>

using namespace std;

int main() {
	int t,ans=0;
	cin >> t;
	while(t--){
		ans=0;
		double n,m,k;
		cin>>n>>m>>k;
		ans = ceil(n/k) + ceil(m/k);
		cout<<ans<<"\n";
	}
}


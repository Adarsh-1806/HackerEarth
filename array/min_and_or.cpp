//problem
//https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/minimum-and-xor-or-6a05bbd4/

#include <bits/stdc++.h>
using namespace std;

int main() {
	long t;
	cin >> t;
	while(t--){
		long n;
		cin>>n;
		long ar[n];
		for(long i=0;i<n;i++)
			cin>>ar[i];

		long ans = INT_MAX;
		sort(ar,ar+n);
		for(long i=1;i<n;i++){
			ans = min(ans,ar[i]^ar[i-1]);
		}
		cout<<ans<<"\n";
	}
}


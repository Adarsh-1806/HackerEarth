//Problem
// https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/practice-problems/algorithm/make-even-8ced0d4b/

#include <bits/stdc++.h>
using namespace std;

int main() {
	long t;
	cin >> t;
	while(t--){
		long n;
		cin>>n;
		long ar[n];
		for(long i=0;i<n;i++){
			cin>>ar[i];
		}
		long ans = 0;
		for(long i=0;i<n-1;i++){
			if(ar[i]%2 != 0 && ar[i+1]%2 != 0){
				ans++;
				int p = ar[i]+ar[i+1];
				int q = ar[i]-ar[i+1];
				ar[i] = p; 
				ar[i+1] = q;
			}
			else if(ar[i]%2 != 0 && ar[i+1]%2 == 0)	{
				ans+=2;
				int p = ar[i]+ar[i+1];
				int q = ar[i]-ar[i+1];
				ar[i] = p; 
				ar[i+1] = q;
				p = ar[i]+ar[i+1];
				q = ar[i]-ar[i+1];
				ar[i] = p; 
				ar[i+1] = q;
			}
			else if(i==n-2 && ar[i+1]%2 != 0){ans += 2;}
		}
		cout<<ans<<"\n";
		ans=0;
	}
}


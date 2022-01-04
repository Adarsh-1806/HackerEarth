//Problem
// https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/practice-problems/algorithm/the-game-dd8618f3/

#include <bits/stdc++.h>
using namespace std;

bool check(long no){
	return ceil(log2(no)) == floor(log2(no));
}
int main() {
	long t;
	cin >> t;
	while(t--){
		long n=0,ans=0;
		cin>>n;
		bool flag = check(n);
		if (flag){ ans = n;}
		else{
			int p = ceil(log2(n));
			n = n<<1;
			// cout<<p<<endl;
			long x = pow(2,p) -1;
			ans = n&x;
		}	
		// cout<<n<<"\n";
		cout<<ans<<endl;
	}
}


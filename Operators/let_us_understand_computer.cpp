// Problem
// https://www.hackerearth.com/practice/basic-programming/operators/basics-of-operators/practice-problems/algorithm/let-us-understand-computer-78476e7a/

 #include<bits/stdc++.h>

using namespace std;
int bitcount(int n){
	int res = 0;
	while(n>0){
		res++;
		n>>= 1;
	}
	return res;
}
int main() {
	int t;
	cin >> t;
	while(t--){
		long x,ans;
		cin >> x;
		long r = (long)ceil(sqrt((double)x));
		long l=1,res = -1;
		while(l<=r){
			long m = l + (r-l)/2;
			int bits_of_d = bitcount(m);
			int bits_of_q = bitcount(x/m);

			if(bits_of_d >= bits_of_q){
				res = m;
				r = m-1;
			}
			else{
				l = m+1;
			}
		}
		ans = x - res +1;
		cout<<ans<<"\n";
		ans =0;
	}
}


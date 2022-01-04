//problem
//https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/
#include <bits/stdc++.h>
using namespace std;

int main() {
	long n,x;
	cin >> n>>x;
	long ar[n],ans=-1;
	for(int i=0;i<n;i++){
		cin>>ar[i];
		if(ar[i] == x)
			ans = i+1;
	}
	cout<<ans;
}


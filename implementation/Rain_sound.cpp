// Problem
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/rain-41f57695/

#include <bits/stdc++.h>

using namespace std;

int main() {
	int t;
	cin >> t;
	while(t--){
		long l,r,s;
		cin>>l>>r>>s;

		long min = l/s+1;
		long max = r/s;

		if(l%s == 0){min--;}

		if(min<=max){
		cout<<min<<" "<<max<<"\n"; 
		}else {
			cout<<"-1"<<" "<<"-1\n";
		}
	}
}


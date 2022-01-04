//Problem
// https://www.hackerearth.com/problem/algorithm/divisibe-or-2d8e196a/?source=list_view
#include <iostream>
#define ll long long
using namespace std;

int main() {
	ll t;
	cin>>t;
	// cout<<t/2;
		ll ar[t];
		for(ll i=0;i<t;i++){
			cin>>ar[i];
		}
		ll num=0,digit=0;
		for(ll i=0;i<t/2;i++){
			digit =0;
			while(ar[i]>0){
				digit = ar[i]%10;
				ar[i] /= 10;
			}
			num = num*10 + digit;
		}
		for(ll i=t/2;i<t;i++){
			num = num*10 + ar[i]%10;
		}
		if(num%11 == 0){
			cout<<"OUI";
		}else{
			cout<<"NON";
		}
}



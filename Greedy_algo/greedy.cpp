//problem
//https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/

#include <bits/stdc++.h>
using namespace std;

int main() {
	long t;
	cin >> t;
	while(t--){
		long bottle,cap;
		cin>>bottle>>cap;
		long ar[bottle];
		for(long i=0;i<bottle;i++)
			cin>>ar[i];
		sort(ar,ar+bottle);
		long ans = 0,i=0;
		while(true){
			if(cap>0 && i<bottle && cap>=ar[i]){
				ans++;
				cap-= ar[i++];
			}
			else	break;
		}
		cout<<ans<<"\n";
	}
}


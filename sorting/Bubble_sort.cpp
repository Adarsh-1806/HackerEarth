//Problem
//https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/practice-problems/algorithm/bubble-sort-problem/?utm_source=header&utm_medium=search&utm_campaign=he-search

#include <bits/stdc++.h>
using namespace std;

int main() {
	long n;
	cin >> n;
		int ar[n],cnt=0;
		for(int i=0;i<n;i++)
			cin>>ar[i];
		for(int i=n-1;i>=0;i--){
			for(int j=0;j<i;j++){
				if(ar[j]>ar[j+1]){
					cnt++;
					int tmp = ar[j+1];
					ar[j+1] = ar[j];
					ar[j] = tmp;
				}
			}
		}
		cout<<cnt;
	
}


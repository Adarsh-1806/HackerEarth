//Problem
//https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/searching-content-problem/?utm_source=header&utm_medium=search&utm_campaign=he-search

#include <bits/stdc++.h>
using namespace std;

long b_search(long ar[],long key,long low, long high){
	while(low<=high){
		long mid = (low+high)/2;
		if(key > ar[mid])	
			low = mid+1;
		else if(key < ar[mid])
			high = mid-1;
		else
			return mid;
	}
	return -1;
}

int main() {
	long n;
	cin >> n;
	long ar[n];
	for(long i=0;i<n;i++)
		cin>>ar[i];
	sort(ar,ar+n);
	long q;
	cin>>q;
	for(long i=0;i<q;i++){
		long x;
		cin>>x;
		cout<<b_search(ar,x,0,n-1)+1<<"\n";
	}
	
}


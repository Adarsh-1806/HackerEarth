// Problem
//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/practice-problems/algorithm/selection-sort-problem/?utm_source=header&utm_medium=search&utm_campaign=he-search

#include <bits/stdc++.h>
using namespace std;

int main() {
	long n,x;
	cin >> n>>x;
	int ar[n];
	for(int i=0;i<n;i++)
		cin>>ar[i];
	int min,index=0;
	for(int i=0;i<x && i<n-1;i++){
		min = i;
		for(int j=i+1;j<n;j++){
			if(ar[min] > ar[j])	{
				min = j;
			}
		}
		int tmp = ar[i];
		ar[i] = ar[min];
		ar[min] = tmp;
	}
	for(int i=0;i<n;i++)
		cout<<ar[i]<<" ";
}


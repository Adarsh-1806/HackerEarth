//Problem
// https://www.hackerearth.com/practice/basic-programming/operators/basics-of-operators/practice-problems/algorithm/going-to-office-e2ef3feb/

#include <bits/stdc++.h>

using namespace std;

int main() {
	long long dist,on_cost,first_km,remain_km;
    long long speed,c_cost,time_spent,cost;

    //take all the inputs
    cin >> dist;
    cin >> on_cost >> first_km >> remain_km;
    cin >> speed >> c_cost >> time_spent >> cost;

    //calculate costs
    long long online = on_cost + remain_km*(dist - first_km);
    long long classic = c_cost + time_spent*(floor(dist/speed))+ dist*cost;

    //find min cost
    if(online <= classic) { cout<<"Online Taxi";}
    else { cout<<"Classic Taxi";}
}



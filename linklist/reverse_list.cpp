//problem
//https://www.hackerearth.com/practice/data-structures/linked-list/singly-linked-list/practice-problems/algorithm/reversed-linked-list-01b722df/

#include <bits/stdc++.h>
using namespace std;
class Node{
	public:
		int data;
		Node* next;
		Node(int data){
			this->data = data;
			next = NULL;
		}
};
void printlist(Node* head){
    Node* cur = head;
    while(cur){
        cout<<cur->data<<" ";
        cur= cur->next;
    }
    cout<<endl;
}
Node* answer(Node* head){
	Node* cur = head;
	Node *start,*end,*tmp,*pre;
	while(cur){			//go through a linked list
		start = cur;
		pre = NULL;
		if(cur->data %2 == 0){ //trigger
			while(cur!=NULL && cur->data%2 ==0){
				tmp = cur->next;
				cur->next = pre;
				pre = cur;
				cur = tmp;
			}
			end = cur;
		}
		
	}
	return head;
}
int main() {
	long t;
	cin>>t;
	Node* head = NULL;
	Node* cur = NULL;
	while(t--){
		int x;
		cin>>x;
		Node* new_node = new Node(x);
		if(!head){	
			head = new_node;
			cur = new_node;
		}else{
			cur->next = new_node;
			cur = new_node;
		}
	}
	head = answer(head);
	printlist(head);
}


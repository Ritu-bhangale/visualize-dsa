// C++ implementation of De-queue
#include<iostream>
using namespace std;

// Maximum size of array or Dequeue
#define MAX 10000

// A structure to represent a Deque
struct Deque
{
	int arr[MAX];
	int front;
	int rear;
	int size;
};

struct Deque *createdeque(int size)
{
    struct Deque *deque = new struct Deque;
    deque->front = -1;
    deque->rear = 0;
    deque->size = size;
    return deque;
}

// Checks whether Deque is full or not.
bool isFull(struct Deque *deque)
{
	return ((deque->front == 0 && deque->rear == deque->size-1)||
			deque->front == deque->rear+1);
}

// Checks whether Deque is empty or not.
bool isEmpty (struct Deque *deque)
{
	return (deque->front == -1);
}

// Inserts an element at front
void insertfront(struct Deque *deque, int key)
{
	// check whether Deque if full or not
	if (isFull(deque))
	{
		cout << "Overflow\n" << endl;
		return;
	}

	// If queue is initially empty
	if (deque->front == -1)
	{
		deque->front = 0;
		deque->rear = 0;
	}

	// front is at first position of queue
	else if (deque->front == 0)
		deque->front = deque->size - 1 ;

	else // decrement front end by '1'
		deque->front = deque->front-1;

	// insert current element into Deque
	deque->arr[deque->front] = key ;
}

// function to inset element at rear end
// of Deque.
void insertrear(struct Deque *deque ,int key)
{
	if (isFull(deque))
	{
		cout << " Overflow\n " << endl;
		return;
	}

	// If queue is initially empty
	if (deque->front == -1)
	{
		deque->front = 0;
		deque->rear = 0;
	}

	// rear is at last position of queue
	else if (deque->rear == deque->size-1)
		deque->rear = 0;

	// increment rear end by '1'
	else
		deque->rear = deque->rear+1;

	// insert current element into Deque
	deque->arr[deque->rear] = key ;
}

// Deletes element at front end of Deque
void deletefront(struct Deque *deque)
{
	// check whether Deque is empty or not
	if (isEmpty(deque))
	{
		cout << "Queue Underflow\n" << endl;
		return ;
	}

	// Deque has only one element
	if (deque->front == deque->rear)
	{
		deque->front = -1;
		deque->rear = -1;
	}
	else
		// back to initial position
		if (deque->front == deque->size -1)
			deque->front = 0;

		else // increment front by '1' to remove current
			// front value from Deque
			deque->front = deque->front+1;
}

// Delete element at rear end of Deque
void deleterear(struct Deque *deque)
{
	if (isEmpty(deque))
	{
		cout << " Underflow\n" << endl ;
		return ;
	}

	// Deque has only one element
	if (deque->front == deque->rear)
	{
		deque->front = -1;
		deque->rear = -1;
	}
	else if (deque->rear == 0)
		deque->rear = deque->size-1;
	else
		deque->rear = deque->rear-1;
}

// Returns front element of Deque
int getFront(struct Deque *deque)
{
	// check whether Deque is empty or not
	if (isEmpty(deque))
	{
		cout << " Underflow\n" << endl;
		return -1 ;
	}
	return deque->arr[deque->front];
}

// function return rear element of Deque
int getRear(struct Deque *deque)
{
	// check whether Deque is empty or not
	if(isEmpty(deque) || deque->rear < 0)
	{
		cout << " Underflow\n" << endl;
		return -1 ;
	}
	return deque->arr[deque->rear];
}

// Driver program to test above function
int main()
{
	struct Deque *dq = createdeque(5);
	cout << "Insert element at rear end : 10 \n";
	insertrear(dq,10);

	cout << "insert element at rear end : 100 \n";
	insertrear(dq, 100);

	cout << "get rear element " << " "
		<< getRear(dq) << endl;

	deleterear(dq);
	cout << "After delete rear element new rear"
		<< " become " << getRear(dq) << endl;

	cout << "inserting element at front end : -1\n";
	insertfront(dq, -1);

	cout << "get front element " << " "
		<< getFront(dq) << endl;

	deletefront(dq);

	cout << "After delete front element new "
	<< "front become " << getFront(dq) << endl;

    delete dq;
	return 0;
}

// Output:
// Insert element at rear end : 10 
// insert element at rear end : 100
// get rear element  100
// After delete rear element new rear become 10
// inserting element at front end : -1
// get front element  -1
// After delete front element new front become 10

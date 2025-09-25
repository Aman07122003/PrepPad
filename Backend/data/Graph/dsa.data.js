const dsaData = {
    Section: "Step 15: Graph",
    content: [
        {
            Subsection: "Lec 1: Basic",
            content: [
                {
                    Topic: "Graph and Types",
                    content: [
                        {
                            heading: "Introduction to Graphs",
                            content: [
                                {
                                    subheading: "What is a Graph?",
                                    para: "A graph is a non-linear data structure consisting of nodes that have data and are connected to other nodes through edges."
                                },
                                {
                                    subheading: "What are Graph data Structures?",
                                    para: "There are two types of data structures:\n1) Linear\n2) Non-linear\n\nWe are aware of linear data structures such as arrays, stacks, queues, and linked lists. They are called linear because data elements are arranged in a linear or sequential manner.\n\nThe only non-linear data structure that we’ve seen so far is Tree. In fact, a tree is a special type of graph with some restrictions. Graphs are data structures that have a wide-ranging application in real life. These include analysis of electrical circuits, finding the shortest routes between two places, building navigation systems like Google Maps, even social media using graphs to store data about each user, etc. To understand and use the graph data structure, let’s get familiar with the definitions and terms associated with graphs."
                                },
                                {
                                    subheading: "Definitions and Terminology",
                                    para: "A graph is a non-linear data structure consisting of nodes that have data and are connected to other nodes through edges.",
                                    image: "/static/Graph1.png"
                                },
                                {
                                    subheading: "Node",
                                    para: "Nodes are circles represented by numbers. Nodes are also referred to as vertices. They store the data. The numbering of the nodes can be done in any order, no specific order needs to be followed.\n\nIn the following example, the number of nodes or vertices = 5",
                                    image: "/static/Graph2.png"
                                },
                                {
                                    subheading: "Edge",
                                    para: "Two nodes are connected by a horizontal line called Edge. Edge can be directed or undirected. Basically, pairs of vertices are called edges.\n\nIn the above example, the edge can go from 1 to 4 or from 4 to 1, i.e. a bidirectional edge can be in both directions, hence called an undirected edge. Thus, the pairs (1,4) and (4,1) represent the same edge.",
                                    image: "/static/Graph2.png"
                                },
                                {
                                    subheading: "Types of Graphs",
                                    image: "/static/Graph3.png"
                                },
                                {
                                    subheading: "Undirected Graph",
                                    para: "An undirected graph is a graph where edges are bidirectional, with no direction associated with them, i.e, there will be an undirected edge. In an undirected graph, the pair of vertices representing any edge is unordered. Thus, the pairs (u, v) and (v, u) represent the same edge."
                                },
                                {
                                    subheading: "Directed Graph",
                                    para: "A directed graph is a graph where all the edges are directed from one vertex to another, i.e, there will be a directed edge. It contains an ordered pair of vertices. It implies each edge is represented by a directed pair <u, v>. Therefore, <u, v> and <v, u> represent two different edges."
                                },
                                {
                                    para: "There can be multi-directed edges, hence bidirectional edges, as shown in the example below.",
                                    image: "/static/Graph4.png"
                                }
                            ]
                        },
                        {
                            heading: "Structure of a Graph",
                            content: [
                                {
                                    para: "Does every graph have a cycle?\n\nThe answer is No! Let us consider the following examples to understand this.",
                                    image: "/static/Graph5.png"
                                },
                                {
                                    para: "Fig.1 does not form a cycle but still, it is a graph."
                                },
                                {
                                    para: "Fig.2 is an example of a binary tree. It can also be called a graph because it follows all the rules. We’ve nodes and edges, and this is the minimal condition to be called a graph."
                                },
                                {
                                    para: "So a graph does not necessarily mean to be an enclosed structure, it can be an open structure as well. A graph is said to have a cycle if it starts from a node and ends at the same node. There can be multiple cycles in a graph.",
                                    image: "/static/Graph6.png"
                                },
                                {
                                    para: "If there is at least one cycle present in the graph then it is called an Undirected Cyclic Graph.\n\nIn the following examples of directed graphs, the first directed graph is not cyclic as we can’t start from a node and end at the same node. Hence it is called Directed Acyclic Graph, commonly called DAG.",
                                    image: "/static/Graph7.png"
                                },
                                {
                                    para: "If we just add an edge to the directed graph, then at least one cycle is present in the graph, hence it becomes Directed Cyclic Graph."
                                },
                                {
                                    subheading: "Path in a Graph",
                                    image: "/static/Graph8.png"
                                },
                                {
                                    para: "The path contains a lot of nodes and each of them is reachable.\n\nConsider the given graph,",
                                    image: "/static/Graph9.png"
                                },
                                {
                                    para: "1 2 3 5 is a path.\n\n1 2 3 2 1 is not a path, because a node can’t appear twice in a path.\n\n1 3 5 is not a path, as adjacent nodes must have an edge and there is no edge between 1 and 3."
                                }
                            ]
                        },
                        {
                            heading: "Types of Graphs based on Degree",
                            content: [
                                {
                                    subheading: "Degree of Graph",
                                    para: "It is the number of edges that go inside or outside that node.\n\nFor undirected graphs, the degree is the number of edges attached to a node.\n\nExample,\nD(3) = 3\nD(4) = 2",
                                    image: "/static/Graph10.png"
                                },
                                {
                                    para: "It states that the total degree of a graph is equal to twice the number of edges. This is because every edge is associated/ connected to two nodes.",
                                    image: "/static/Graph11.png"
                                },
                                {
                                    para: "Total Degree of a graph = 2 x E\n\nExample, (2+2+3+2+3) = 2 x 6 => 12 = 12",
                                    image: "/static/Graph12.png"
                                },
                                {
                                    para: "For directed graphs, we’ve Indegree and Outdegree. The indegree of a node is the number of incoming edges. The outdegree of a node is the number of outgoing edges."
                                },
                                {
                                    subheading: "Edge Weight",
                                    para: "A graph may have weights assigned on its edges. It is often referred to as the cost of the edge.",
                                    image: "/static/Graph13.png"
                                },
                                {
                                    para: "If weights are not assigned then we assume the unit weight, i.e, 1. In applications, weight may be a measure of the cost of a route. For example, if vertices A and B represent towns in a road network, then weight on edge AB may represent the cost of moving from A to B, or vice versa."
                                }
                            ]
                        }
                    ],
                    video: "https://youtu.be/M3_pLsDdeuU?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                    code: `import java.util.*;

class Graph {
    private int vertices;
    private LinkedList<Integer>[] adjacencyList;

    public Graph(int vertices) {
        this.vertices = vertices;
        adjacencyList = new LinkedLst[vertices];
        for (int i = 0; i < vertices; i++) {
            adjacencyList[i] = new LinkedList<>();
        }
    }

    public void addEdge(int source, int destination) {
        adjacencyList[source].add(destination);
        adjacencyList[destination].add(source); // For undirected graph
    }

    public void printGraph() {
        for (int i = 0; i < vertices; i++) {
            System.out.print("Vertex " + i + ":");
            for (Integer neighbor : adjacencyList[i]) {
                System.out.print(" -> " + neighbor);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Graph graph = new Graph(5);

        graph.addEdge(0, 1);
        graph.addEdge(0, 4);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(1, 4);
        graph.addEdge(2, 3);
        graph.addEdge(3, 4);

        graph.printGraph();
    }
}`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/explore/learn/card/graph/",
                            gfg: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Graph Representation in Java",
                    content: [
                        {
                            heading: "Graph Representation in Java",
                            content: [
                                {
                                    subheading: "Representations of Graph",
                                    para: "Here are the two most common ways to represent a graph : For simplicity, we are going to consider only unweighted graphs in this post. \n\n Adjacency Matrix \n Adjacency List"
                                },
                                {
                                    subheading: "Adjacency Matrix Representation",
                                    para: "An adjacency matrix is a way of representing a graph as a matrix of boolean (0's and 1's) \n\n Let's assume there are n vertices in the graph So, create a 2D matrix adjMat[n][n] having dimension n x n. \n\n If there is an edge from vertex i to j, mark adjMat[i][j] as 1.  \n If there is no edge from vertex i to j, mark adjMat[i][j] as 0."
                                },
                                {
                                    subheading: "Representation of Undirected Graph as Adjacency Matrix:",
                                    para: "The below figure shows an undirected graph. Initially, the entire Matrix is ​initialized to 0. If there is an edge from source to destination, we insert 1 to both cases (adjMat[source][destination] and adjMat[destination][source]) because we can go either way.",
                                    image: "/static/Graph14.png"
                                },
                                {
                                    subheading: "Representation of Directed Graph as Adjacency Matrix:",
                                    para: "The below figure shows a directed graph. Initially, the entire Matrix is ​​initialized to 0. If there is an edge from source to destination, we insert 1 for that particular adjMat[source][destination].",
                                    image: "/static/Graph15.png"
                                },
                            ]
                        },
                        {
                            heading: "Adjacency List Representation",
                            content: [
                                {
                                    para: "An array of Lists is used to store edges between two vertices. The size of array is equal to the number of vertices (i.e, n). Each index in this array represents a specific vertex in the graph. The entry at the index i of the array contains a linked list containing the vertices that are adjacent to vertex i. Let's assume there are n vertices in the graph So, create an array of list of size n as adjList[n]. \n\n adjList[0] will have all the nodes which are connected (neighbour) to vertex 0.\n adjList[1] will have all the nodes which are connected (neighbour) to vertex 1 and so on.",
                                },
                                {
                                    subheading: "Representation of Undirected Graph as Adjacency List:",
                                    para: "The below undirected graph has 3 vertices. So, an array of list will be created of size 3, where each indices represent the vertices. Now, vertex 0 has two neighbours (i.e, 1 and 2). So, insert vertex 1 and 2 at indices 0 of array. Similarly, For vertex 1, it has two neighbour (i.e, 2 and 0) So, insert vertices 2 and 0 at indices 1 of array. Similarly, for vertex 2, insert its neighbours in array of list.",
                                    image: "/static/Graph16.png"
                                },
                                {
                                    subheading: "Representation of Directed Graph as Adjacency List:",
                                    para: "The below directed graph has 3 vertices. So, an array of list will be created of size 3, where each indices represent the vertices. Now, vertex 0 has no neighbours. For vertex 1, it has two neighbour (i.e, 0 and 2) So, insert vertices 0 and 2 at indices 1 of array. Similarly, for vertex 2, insert its neighbours in array of list.",
                                    image: "/static/Graph17.png"
                                },
                            ]
                        },
                    ],
                    video: "https://youtu.be/OsNklbh9gYI?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                    code: `#Adjacency Matrix Representation
    
                    
import java.util.Arrays;
public class GfG {

    public static void addEdge(int[][] mat, int i, int j) {
        mat[i][j] = 1;
        mat[j][i] = 1; // Since the graph is undirected
    }

    public static void displayMatrix(int[][] mat) {
        for (int[] row : mat) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {

        // Create a graph with 4 vertices and no edges
        // Note that all values are initialized as 0
        int V = 4;
        int[][] mat = new int[V][V];

        // Now add edges one by one
        addEdge(mat, 0, 1);
        addEdge(mat, 0, 2);
        addEdge(mat, 1, 2);
        addEdge(mat, 2, 3);

        /* Alternatively we can also create using below
           code if we know all edges in advance

         int[][] mat = {{ 0, 1, 0, 0 },
                        { 1, 0, 1, 0 },
                        { 0, 1, 0, 1 },
                        { 0, 0, 1, 0 } }; */

        System.out.println("Adjacency Matrix Representation");
        displayMatrix(mat);
    }
}

Output
    Adjacency Matrix Representation
    0 1 1 0 
    1 0 1 0 
    1 1 0 1 
    0 0 1 0 



#Adjacency List Representation


import java.util.ArrayList;
import java.util.List;

public class GfG {
    
    // Method to add an edge between two vertices
    public static void addEdge(List<List<Integer>> adj, int i, int j) {
        adj.get(i).add(j);
        adj.get(j).add(i); // Undirected
    }

    // Method to display the adjacency list
    public static void displayAdjList(List<List<Integer>> adj) {
        for (int i = 0; i < adj.size(); i++) {
            System.out.print(i + ": "); // Print the vertex
            for (int j : adj.get(i)) {
                System.out.print(j + " "); // Print its adjacent 
            }
            System.out.println(); 
        }
    }

    // Main method
    public static void main(String[] args) {
      
        // Create a graph with 4 vertices and no edges
        int V = 4;
        List<List<Integer>> adj = new ArrayList<>(V); 
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Now add edges one by one
        addEdge(adj, 0, 1);
        addEdge(adj, 0, 2);
        addEdge(adj, 1, 2);
        addEdge(adj, 2, 3);

        System.out.println("Adjacency List Representation:");
        displayAdjList(adj);
    }
}



Output
    Adjacency List Representation:
    0: 1 2 
    1: 0 2 
    2: 0 1 3 
    3: 2 
`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/explore/learn/card/graph/",
                            gfg: "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Connected Components | Logic Explanation",
                    content: [
                        {
                            heading: "Connected Components in Graphs",
                            content: [
                                {
                                    para: "So far we've seen different types of graphs. Graphs can be connected or can be like a binary tree (as we know all trees are graphs with some restrictions) as shown in the following figure.",
                                    image: "/static/Graph18.png"
                                },
                                {
                                    para: "But what would you call the following figure?",
                                    image: "/static/Graph19.png"
                                },
                                {
                                    para: "The most common answer would be these are 4 different graphs as they are not connected. \n\n But is it possible to call them a single graph? To answer this, let us consider the question given: \n\n Given an undirected graph with 10 nodes and 8 edges. The edges are (1,2), (1,3), (2,4), (4,3), (5,6), (5,7), (6,7), (8,9) .The graph that can be formed with the given information is as follows:",
                                    image: "/static/Graph20.png"
                                },
                                {
                                    para: "Apparently, it's a graph, which is in 4 pieces, the last one being a single node. In this case, we can say, the graph has been broken down into 4 different connected components. So next time if you see two different parts of a graph and they are not connected, then do not say that it cannot be a single graph. In the above example, they can be 4 different graphs but according to the given question and the input, we can call them parts of a single graph.",
                                },
                            ]
                        },
                        {
                            heading: "Graph Traversal",
                            content: [
                                {
                                    para: "In the upcoming topics, we’ll be learning about a lot of algorithms. Now, assume a traversal algorithm. Any traversal algorithm will always use a visited array.",
                                    image: "/static/Graph21.png"
                                },
                                {
                                    para: "For the same example, we will create an array of size 11 (n+1) starting with the zeroth index. Initialize this visited array to zero, indicating that all the nodes are unvisited. Then follow the following algorithm. If a node is not visited, then call the traversal algorithm.",
                                    image: "/static/Graph22.png"
                                },
                                {
                                    subheading: "Why can’t we just call traversal(1)?",
                                    para: "We cannot just call traversal(node) because a graph can have multiple components and traversal algorithms are designed in such a way that they will traverse the entire connected portion of the graph. For example, traversal(1) will traverse only the connected nodes, i.e., nodes 2, 3, and 4, but not the connected components. \n\n Consider the following illustration to understand how a traversal algorithm will traverse the connected components.",
                                    image: "/static/Graph23.gif"
                                },
                            ]
                        },
                    ],
                    video: "https://youtu.be/lea-Wl_uWXY?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                    code: `
import java.util.*;

class Graph {
    private int vertices;
    private LinkedList<Integer>[] adjacencyList;

    // Constructor
    public Graph(int vertices) {
        this.vertices = vertices;
        adjacencyList = new LinkedList[vertices];
        for (int i = 0; i < vertices; i++) {
            adjacencyList[i] = new LinkedList<>();
        }
    }

    // Add edge between source and destination
    public void addEdge(int source, int destination) {
        adjacencyList[source].add(destination);
        adjacencyList[destination].add(source); // because it's undirected
    }

    // DFS to explore connected components
    private void DFS(int vertex, boolean[] visited) {
        visited[vertex] = true;
        for (int neighbor : adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                DFS(neighbor, visited);
            }
        }
    }

    // Count connected components
    public int countConnectedComponents() {
        boolean[] visited = new boolean[vertices];
        int count = 0;

        for (int i = 0; i < vertices; i++) {
            if (!visited[i]) {
                DFS(i, visited);
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Graph graph = new Graph(10); // graph with 10 nodes (0 to 9)

        // Adding edges as given in the example
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 4);
        graph.addEdge(4, 3);
        graph.addEdge(5, 6);
        graph.addEdge(5, 7);
        graph.addEdge(6, 7);
        graph.addEdge(8, 9);

        int connectedComponents = graph.countConnectedComponents();
        System.out.println("Number of connected components: " + connectedComponents);
    }
}

`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/explore/learn/card/graph/",
                            gfg: "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "BFS",
                    content: [
                        {
                            heading: "Breadth First Search (BFS): Level Order Traversal",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given an undirected graph, return a vector of all nodes by traversing the graph using breadth-first search (BFS)."
                                },
                                {
                                    image: "/static/Graph24.png"
                                },
                                {
                                    image: "/static/Graph25.png"
                                },
                                {
                                    image: "/static/Graph26.png"
                                },
                                {
                                    image: "/static/Graph27.gif"
                                },
                            ]
                        },

                    ],
                    video: "https://youtu.be/-tgVpUgsQ5k?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                    code: `
import java.util.*;
class Solution {
    // Function to return Breadth First Traversal of given graph.
    public ArrayList<Integer> bfsOfGraph(int V, 
    ArrayList<ArrayList<Integer>> adj) {
        
        ArrayList < Integer > bfs = new ArrayList < > ();
        boolean vis[] = new boolean[V];
        Queue < Integer > q = new LinkedList < > ();

        q.add(0);
        vis[0] = true;

        while (!q.isEmpty()) {
            Integer node = q.poll();
            bfs.add(node);

            // Get all adjacent vertices of the dequeued vertex s
            // If a adjacent has not been visited, then mark it
            // visited and enqueue it
            for (Integer it: adj.get(node)) {
                if (vis[it] == false) {
                    vis[it] = true;
                    q.add(it);
                }
            }
        }

        return bfs;
    }
    
    public static void main(String args[]) {

        ArrayList < ArrayList < Integer >> adj = new ArrayList < > ();
        for (int i = 0; i < 5; i++) {
            adj.add(new ArrayList < > ());
        }
        adj.get(0).add(1);
        adj.get(1).add(0);
        adj.get(0).add(4);
        adj.get(4).add(0);
        adj.get(1).add(2);
        adj.get(2).add(1);
        adj.get(1).add(3);
        adj.get(3).add(1);
        
        Solution sl = new Solution(); 
        ArrayList < Integer > ans = sl.bfsOfGraph(5, adj);
        int n = ans.size(); 
        for(int i = 0;i<n;i++) {
            System.out.print(ans.get(i)+" "); 
        }
    }
}


Output: 0 1 4 2 3

Time Complexity: O(N) + O(2E), Where N = Nodes, 2E is for total degrees as we traverse all adjacent nodes.

Space Complexity: O(3N) ~ O(N), Space for queue data structure visited array and an adjacency list
`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/explore/learn/card/graph/",
                            gfg: "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "DFS",
                    content: [
                        {
                            heading: "Graph Representation in Java",
                            content: [
                                {
                                    subheading: "Representations of Graph",
                                    para: "Here are the two most common ways to represent a graph : For simplicity, we are going to consider only unweighted graphs in this post. \n\n Adjacency Matrix \n Adjacency List"
                                },
                                {
                                    subheading: "Adjacency Matrix Representation",
                                    para: "An adjacency matrix is a way of representing a graph as a matrix of boolean (0's and 1's) \n\n Let's assume there are n vertices in the graph So, create a 2D matrix adjMat[n][n] having dimension n x n. \n\n If there is an edge from vertex i to j, mark adjMat[i][j] as 1.  \n If there is no edge from vertex i to j, mark adjMat[i][j] as 0."
                                },
                                {
                                    subheading: "Representation of Undirected Graph as Adjacency Matrix:",
                                    para: "The below figure shows an undirected graph. Initially, the entire Matrix is ​initialized to 0. If there is an edge from source to destination, we insert 1 to both cases (adjMat[source][destination] and adjMat[destination][source]) because we can go either way.",
                                    image: "/static/Graph14.png"
                                },
                                {
                                    subheading: "Representation of Directed Graph as Adjacency Matrix:",
                                    para: "The below figure shows a directed graph. Initially, the entire Matrix is ​​initialized to 0. If there is an edge from source to destination, we insert 1 for that particular adjMat[source][destination].",
                                    image: "/static/Graph15.png"
                                },
                            ]
                        },
                        {
                            heading: "Adjacency List Representation",
                            content: [
                                {
                                    para: "An array of Lists is used to store edges between two vertices. The size of array is equal to the number of vertices (i.e, n). Each index in this array represents a specific vertex in the graph. The entry at the index i of the array contains a linked list containing the vertices that are adjacent to vertex i. Let's assume there are n vertices in the graph So, create an array of list of size n as adjList[n]. \n\n adjList[0] will have all the nodes which are connected (neighbour) to vertex 0.\n adjList[1] will have all the nodes which are connected (neighbour) to vertex 1 and so on.",
                                },
                                {
                                    subheading: "Representation of Undirected Graph as Adjacency List:",
                                    para: "The below undirected graph has 3 vertices. So, an array of list will be created of size 3, where each indices represent the vertices. Now, vertex 0 has two neighbours (i.e, 1 and 2). So, insert vertex 1 and 2 at indices 0 of array. Similarly, For vertex 1, it has two neighbour (i.e, 2 and 0) So, insert vertices 2 and 0 at indices 1 of array. Similarly, for vertex 2, insert its neighbours in array of list.",
                                    image: "/static/Graph16.png"
                                },
                                {
                                    subheading: "Representation of Directed Graph as Adjacency List:",
                                    para: "The below directed graph has 3 vertices. So, an array of list will be created of size 3, where each indices represent the vertices. Now, vertex 0 has no neighbours. For vertex 1, it has two neighbour (i.e, 0 and 2) So, insert vertices 0 and 2 at indices 1 of array. Similarly, for vertex 2, insert its neighbours in array of list.",
                                    image: "/static/Graph17.png"
                                },
                            ]
                        },
                    ],
                    video: "https://youtu.be/OsNklbh9gYI?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                    code: `
import java.util.*;
`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/explore/learn/card/graph/",
                            gfg: "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
            ]
        },
        {
            Subsection: "Lec 2: Problems on BFS-DFS",
            content: [
                {
                    Topic: "Number of Provinces",
                    content: [
                        {
                            heading: "Number of Provinces",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given an undirected graph with V vertices. We say two vertices u and v belong to a single province if there is a path from u to v or v to u. Your task is to find the number of provinces.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph28.png"
                                },
                                {
                                    subheading: "Approach",
                                    image: "/static/Graph29.png"
                                },
                                {
                                    image: "/static/Graph30.gif"
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/ACzkVtewUYA",
                    code: `import java.util.*;

class Solution {
    // dfs traversal function 
    private static void dfs(int node, ArrayList<ArrayList<Integer>> adjLs , int vis[]) {
        vis[node] = 1; 
        for(Integer it: adjLs.get(node)) {
            if(vis[it] == 0) {
                dfs(it, adjLs, vis); 
            }
        }
    }
    static int numProvinces(ArrayList<ArrayList<Integer>> adj, int V) {
        ArrayList<ArrayList<Integer>> adjLs = new ArrayList<ArrayList<Integer>>(); 
        for(int i = 0;i<V;i++) {
            adjLs.add(new ArrayList<Integer>()); 
        }
        
        // to change adjacency matrix to list 
        for(int i = 0;i<V;i++) {
            for(int j = 0;j<V;j++) {
                // self nodes are not considered 
                if(adj.get(i).get(j) == 1 && i != j) {
                    adjLs.get(i).add(j); 
                    adjLs.get(j).add(i); 
                }
            }
        }
        int vis[] = new int[V]; 
        int cnt = 0; 
        for(int i = 0;i<V;i++) {
            if(vis[i] == 0) {
               cnt++;
               dfs(i, adjLs, vis); 
            }
        }
        return cnt; 
    }
    public static void main(String[] args)
    {

        // adjacency matrix 
        ArrayList<ArrayList<Integer> > adj = new ArrayList<ArrayList<Integer> >();

        adj.add(new ArrayList<Integer>());
        adj.get(0).add(0, 1);
        adj.get(0).add(1, 0);
        adj.get(0).add(2, 1);
        adj.add(new ArrayList<Integer>());
        adj.get(1).add(0, 0);
        adj.get(1).add(1, 1);
        adj.get(1).add(2, 0);
        adj.add(new ArrayList<Integer>());
        adj.get(2).add(0, 1);
        adj.get(2).add(1, 0);
        adj.get(2).add(2, 1);
                
        Solution ob = new Solution();
        System.out.println(ob.numProvinces(adj,3));
    }
};




Output: 2

Time Complexity: O(N) + O(V+2E), Where O(N) is for outer loop and inner loop runs in total a single DFS over entire graph, and we know DFS takes a time of O(V+2E). 

Space Complexity: O(N) + O(N),Space for recursion stack space and visited array.`,

                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/number-of-provinces/description/",
                            gfg: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Connected Components Problem in Matrix",
                    content: [
                        {
                            heading: "Connected Components Problem in a Matrix",
                            content: [
                                {
                                    para: "The Connected Components Problem in a matrix refers to identifying distinct regions in a matrix where connected cells satisfy certain conditions (e.g., having the same value like 1). These regions or groups are called connected components.",
                                },
                                {
                                    image: "/static/Graph31.png"
                                },
                                {
                                    subheading: "✅ Definitions",
                                    para: "Connected component: A set of cells where each cell is connected to others through a path of adjacent cells. \n\n Adjacency: \n\n 4-directional: Up, down, left, right. \n 8-directional: Up, down, left, right, and diagonals."
                                },
                                {
                                    image: "/static/Graph32.gif"
                                },
                            ]
                        },
                        {
                            heading: "✅ DFS Approach (4-directional adjacency)",
                            content: [
                                {
                                    image: "/static/Graph33.png"
                                },
                                {
                                    image: "/static/Graph34.png"
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/9esCn0awd5k",
                    code: `public class ConnectedComponentsDFS {

    // Directions for 4-connected neighbors (up, down, left, right)
    private static final int[] rowDirections = {-1, 1, 0, 0};
    private static final int[] colDirections = {0, 0, -1, 1};

    public static int countConnectedComponents(int[][] matrix) {
        if (matrix == null || matrix.length == 0) {
            return 0;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        boolean[][] visited = new boolean[rows][cols];
        int count = 0;

        // Iterate over every cell in the matrix
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                // If the cell is 1 and not visited, it's a new component
                if (matrix[r][c] == 1 && !visited[r][c]) {
                    dfs(matrix, visited, r, c, rows, cols);
                    count++; // Increment the count for this component
                }
            }
        }
        return count;
    }

    private static void dfs(int[][] matrix, boolean[][] visited, int r, int c, int rows, int cols) {
        // Boundary checks
        if (r < 0 || r >= rows || c < 0 || c >= cols) {
            return;
        }
        // Skip if already visited or if it's not part of a component
        if (visited[r][c] || matrix[r][c] == 0) {
            return;
        }

        visited[r][c] = true; // Mark current cell as visited

        // Explore all 4 directions
        for (int d = 0; d < 4; d++) {
            int newRow = r + rowDirections[d];
            int newCol = c + colDirections[d];
            dfs(matrix, visited, newRow, newCol, rows, cols);
        }
    }

    // Main method to test the implementation
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 1, 0, 0},
            {0, 1, 0, 0},
            {0, 0, 1, 1},
            {0, 0, 0, 1}
        };

        int result = countConnectedComponents(matrix);
        System.out.println("Number of connected components: " + result);
    }
}
`,

                    AdditionalResources: [
                        {
                            leetcode: "",
                            gfg: "",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "",
                        },
                    ]
                },
                {
                    Topic: "Rotten Oranges",
                    content: [
                        {
                            heading: "Rotten Oranges : Min time to rot all oranges : BFS",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "You will be given an m x n grid, where each cell has the following values : \n\n 2  -  represents a rotten orange \n 1  -  represents a Fresh orange \n 0  -  represents an Empty Cell \n\n Every minute, if a Fresh Orange is adjacent to a Rotten Orange in 4-direction ( upward, downwards, right, and left ) it becomes Rotten. \n\n Return the minimum number of minutes required such that none of the cells has a Fresh Orange. If it's not possible, return -1.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph35.png"
                                },
                                {
                                    image: "/static/Graph36.png"
                                },
                                {
                                    subheading: "Solution Approach",
                                    para: "The idea is that for each rotten orange, we will find how many fresh oranges there are in its 4 directions. If we find any fresh orange we will make it into a rotten orange. One rotten orange can rotten up to 4 fresh oranges present in its 4 directions. For this problem,  we will be using the BFS ( Breadth-First Search ) technique.",
                                    image: "/static/Graph37.png"
                                },
                                {
                                    subheading: "Steps to be followed",
                                    para: "-> First of all we will create a Queue data structure to store coordinate of Rotten Oranges \n\n We will also have variables as: \n\n Total_oranges - It will store total number of oranges in the grid ( Rotten + Fresh ) \n Count - It will store the total number of oranges rotten by us .  \n\n Total_time - total time taken to rotten. \n\n -> After this, we will traverse the whole grid and count the total number of oranges in the grid and store it in Total_oranges. Then we will also push the rotten oranges in the Queue data structure as well. \n\n -> Now while our queue is not empty,  we will pick up each Rotten Orange and check in all its 4 directions whether a Fresh orange is present or not. If it is present we will make it rotten and push it in our queue data structure and pop out the Rotten Orange which we took up as its work is done now. \n\n -> Also we will keep track of the count of rotten oranges we are getting. \n\n -> If we rotten some oranges, then obviously our queue will not be empty. In that case, we will increase our total time. This goes on until our queue becomes empty. \n\n -> After it becomes empty, We will check whether the total number of oranges initially is equal to the current count of oranges. If yes, we will return the total time taken, else will return -1 because some fresh oranges are still left and can’t be made rotten."
                                }
                            ]
                        }
                    ],
                    video: "https://youtu.be/yf3oUhkvqA0",
                    code: `import java.util.*;
class TUF{
public static int orangesRotting(int[][] grid) {
        if(grid == null || grid.length == 0) return 0;
        int rows = grid.length;
        int cols = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        int count_fresh = 0;
        //Put the position of all rotten oranges in queue
        //count the number of fresh oranges
        for(int i = 0 ; i < rows ; i++) {
            for(int j = 0 ; j < cols ; j++) {
                if(grid[i][j] == 2) {
                    queue.offer(new int[]{i , j});
                }
                if(grid[i][j] != 0) {
                    count_fresh++;
                }
            }
        }
       
        if(count_fresh == 0) return 0;
        int minutes = 0;
        int dx[] = {0, 0, 1, -1};
        int dy[] = {1, -1, 0, 0};
        
        //bfs starting from initially rotten oranges
        while(!queue.isEmpty()) {
            int size = queue.size();
            boolean rottedThisRound = false;
            for(int i = 0 ; i < size ; i++) {
                int[] point = queue.poll();
                for(int j = 0;j<4;j++) {
                    int x = point[0] + dx[j];
                    int y = point[1] + dy[j];
                    
                    if(x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] == 0 || 
                    grid[x][y] == 2) continue;
                    
                    grid[x][y] = 2;
                    queue.offer(new int[]{x , y});
                    count_fresh--;
                    rottedThisRound = true;

                }
            }
            if(rottenThisRound) {
                minutes++;
            }
        }
        return count_fresh == 0 ? minutes : -1;
    }
    public static void main(String args[])
    {
        int arr[][]={ {2,1,1} , {1,1,0} , {0,1,1} };
        int rotting = orangesRotting(arr);
        System.out.println("Minimum Number of Minutes Required "+rotting);
    }
}
    
Output:

Minimum Number of Minutes Required 4

Time Complexity: O ( n x n ) x 4    

Reason: Worst-case - We will be making each fresh orange rotten in the grid and for each rotten orange will check in 4 directions

Space Complexity: O ( n x n )

Reason: worst-case -  If all oranges are Rotten, we will end up pushing all rotten oranges into the Queue data structure
`,

                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/rotting-oranges/description/",
                            gfg: "https://www.geeksforgeeks.org/dsa/minimum-time-required-so-that-all-oranges-become-rotten/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Flood Fill",
                    content: [
                        {
                            heading: "Flood Fill",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "An image is represented by a 2-D array of integers, each integer representing the pixel value of the image. Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, \"flood fill\" the image. \n\n To perform a \"flood fill\", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same colour as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same colour as the starting pixel), and so on. Replace the colour of all of the aforementioned pixels with the newColor.",
                                },
                                {
                                    para: "\Pre-req:\ Connected Components, Graph traversal techniques",
                                    image: "/static/Graph38.png"
                                },
                                {
                                    subheading: "Explanation:",
                                    para: "From the centre of the image (with position (sr, sc) = (1, 1)), all pixels connected by a path of the same colour as the starting pixel are colored with the new colour. \n\n Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.",
                                    image: "/static/Graph39.gif",
                                },
                                {
                                    image: "/static/Graph40.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same colour as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same colour as the starting pixel), and so on. \n\n We know about both the traversals, Breadth First Search (BFS) and Depth First Search (DFS). We can follow BFS also, where we start at a given point and colour level wise, i.e., we go simultaneously to all its neighbours. We can use any of the traversals to solve this problem, in our case we will be using DFS just to explore multiple approaches.",
                                    image: "/static/Graph41.png"
                                },
                                {
                                    para: "In this way, “flood fill” will be performed. It doesn’t matter how we are colouring the pixels, we just want to colour all of the aforementioned pixels with the newColor. So, we can use any of the traversal techniques. \n\n Consider the following example to understand how DFS traverses the pixels and colours them accordingly.",
                                    image: "/static/Graph42.gif"
                                },
                                {
                                    subheading: "How to set boundaries for 4 directions?",
                                    para: "The 4 neighbours will have following indexes:",
                                },
                                {
                                    image: "/static/Graph43.png"
                                },
                                {
                                    para: "Now, either we can apply 4 conditions or follow the following method.  \n\n From the above image, it is clear that delta change in row is -1, +0, +1, +0. Similarly, the delta change in column is 0, +1, +0, -1.  So we can apply the same logic to find the neighbours of a particular pixel (<row, column>).",
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/C-2_uSRli8o",
                    code: `import java.util.*;

class Solution {

    // DFS function to fill the connected area
    private void dfs(int row, int col, int[][] image, int newColor, int iniColor) {
        int n = image.length;
        int m = image[0].length;

        // Check if the current cell is out of bounds or not the same color
        if(row < 0 || col < 0 || row >= n || col >= m || image[row][col] != iniColor) {
            return;
        }

        // Color the current cell
        image[row][col] = newColor;

        // Move in all four directions
        dfs(row - 1, col, image, newColor, iniColor); // Up
        dfs(row + 1, col, image, newColor, iniColor); // Down
        dfs(row, col - 1, image, newColor, iniColor); // Left
        dfs(row, col + 1, image, newColor, iniColor); // Right
    }

    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int iniColor = image[sr][sc];

        // If the starting pixel is already the new color, return it as is
        if(iniColor == newColor) return image;

        // Start DFS
        dfs(sr, sc, image, newColor, iniColor);

        return image;
    }

    public static void main(String[] args) {
        int[][] image = {
            {1,1,1},
            {1,1,0},
            {1,0,1}
        };

        Solution obj = new Solution();
        int[][] result = obj.floodFill(image, 1, 1, 2);

        // Print the final image
        for(int i = 0; i < result.length; i++) {
            for(int j = 0; j < result[0].length; j++) {
                System.out.print(result[i][j] + " ");
            }
            System.out.println();
        }
    }
}

    
Output:

2 2 2
2 2 0 
2 0 1


Time Complexity: O(NxM + NxMx4) ~ O(N x M)

For the worst case, all of the pixels will have the same colour, so DFS function will be called for (N x M) nodes and for every node we are traversing for 4 neighbours, so it will take O(N x M x 4) time.

Space Complexity: O(N x M) + O(N x M)

O(N x M) for copied input array and recursive stack space takes up N x M locations at max. `,

                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/flood-fill/description/",
                            gfg: "https://www.geeksforgeeks.org/dsa/flood-fill-algorithm/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Cycle Detection in unirected Graph",
                    content: [
                        {
                            heading: "Detect Cycle in an Undirected Graph (using BFS)",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given an undirected graph with V vertices and E edges, check whether it contains any cycle or not.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph44.png"
                                },
                                {
                                    image: "/static/Graph45.png",
                                },
                                {
                                    subheading: "Intuition",
                                    para: "The cycle in a graph starts from a node and ends at the same node. So we can think of two algorithms to do this, in this article we will be reading about the BFS, and in the next, we will be learning how to use DFS to check. \n\n Breadth First Search, BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level. \n\n The intuition is that we start from a node, and start doing BFS level-wise, if somewhere down the line, we visit a single node twice, it means we came via two paths to end up at the same node. It implies there is a cycle in the graph because we know that we start from different directions but can arrive at the same node only if the graph is connected or contains a cycle, otherwise we would never come to the same node again.",
                                },
                                {
                                    subheading: "Approach",
                                    para: "-> Queue: Define a queue and insert the source node along with parent data (<source node, parent>). For example, (2, 1) means 2 is the source node and 1 is its parent node. \n\n ->Visited array: an array initialized to 0 indicating unvisited nodes.",
                                },
                                {
                                    subheading: "The Algorithm steps are as follows:",
                                    para: "-> For BFS traversal, we need a queue data structure and a visited array. \n\n -> Push the pair of the source node and its parent data (<source, parent>) in the queue, and mark the node as visited. The parent will be needed so that we don’t do a backward traversal in the graph, we just move frontwards. \n\n -> Start the BFS traversal, pop out an element from the queue every time and travel to all its unvisited neighbors using an adjacency list. \n\n -> Repeat the steps either until the queue becomes empty, or a node appears to be already visited which is not the parent, even though we traveled in different directions during the traversal, indicating there is a cycle. \n\n -> If the queue becomes empty and no such node is found then there is no cycle in the graph. \n\n A graph can have connected components as well. In such cases, if any component forms a cycle then the graph is said to have a cycle. We can follow the algorithm for the same:",
                                },
                                {
                                    image: "/static/Graph46.png"
                                },
                                {
                                    image: "/static/Graph47.gif"
                                },
                            ]
                        },
                        {
                            heading: "Detect Cycle in an Undirected Graph (using DFS)",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given an undirected graph with V vertices and E edges, check whether it contains any cycle or not.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph48.png"
                                },
                                {
                                    image: "/static/Graph49.png",
                                },
                                {
                                    subheading: "Intuition",
                                    para: "The cycle in a graph starts from a node and ends at the same node. DFS is a traversal technique that involves the idea of recursion and backtracking. DFS goes in-depth, i.e., traverses all nodes by going ahead, and when there are no further nodes to traverse in the current path, then it backtracks on the same path and traverses other unvisited nodes. The intuition is that we start from a source and go in-depth, and reach any node that has been previously visited in the past; it means there's a cycle.",
                                },
                                {
                                    subheading: "Approach",
                                    para: "The algorithm steps are as follows: \n\n -> In the DFS function call make sure to store the parent data along with the source node, create a visited array, and initialize to 0. The parent is stored so that while checking for re-visited nodes, we don’t check for parents. \n\n -> We run through all the unvisited adjacent nodes using an adjacency list and call the recursive dfs function. Also, mark the node as visited \n\n -> If we come across a node that is already marked as visited and is not a parent node, then keep on returning true indicating the presence of a cycle; otherwise return false after all the adjacent nodes have been checked and we did not find a cycle. \n\n NOTE: We can call it a cycle only if the already visited node is a non-parent node because we cannot say we came to a node that was previously the parent node. \n\n -> For example, node 2 has two adjacent nodes 1 and 5. 1 is already visited but it is the parent node ( DFS(2, 1) ), So this cannot be called a cycle.",
                                    image: "/static/Graph50.png"
                                },
                                {
                                    para: "Node 3 has three adjacent nodes, where 4 and 6 are already visited but node 1 is not visited by node 3, but it’s already marked as visited and is a non-parent node ( DFS(3, 6) ), indicating the presence of cycle.",
                                },
                                {
                                    image: "/static/Graph51.png"
                                },
                                {
                                    subheading: "Pseudocode:",
                                    image: "/static/Graph52.png"
                                },
                                {
                                    para: "Consider the following graph and its adjacency list.",
                                    image: "/static/Graph53.png",
                                },
                                {
                                    image: "/static/Graph54.gif",
                                }
                            ]
                        }
                    ],
                    video: "https://youtu.be/BPlrALf1LDU",
                    code: `


--------------------------------------------------------
|  Cycle Detection in an Undirected Graph (using BFS)  |
--------------------------------------------------------



import java.util.*;
class Solution {

    // Helper method to check for cycle using BFS
    private boolean hasCycle(ArrayList<ArrayList<Integer>> adj, int start, boolean[] visited) {
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(start, -1));
        visited[start] = true;

        while (!queue.isEmpty()) {
            Pair current = queue.poll();
            int node = current.node;
            int parent = current.parent;

            for (int neighbor : adj.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.add(new Pair(neighbor, node));
                } else if (neighbor != parent) {
                    return true; // Cycle detected
                }
            }
        }
        return false;
    }

    // Main method to detect cycle in the graph
    public boolean isCycle(int V, ArrayList<ArrayList<Integer>> adj) {
        boolean[] visited = new boolean[V];
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                if (hasCycle(adj, i, visited)) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int V = 4;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Adding edges
        adj.get(1).add(2);
        adj.get(2).add(1);
        adj.get(2).add(3);
        adj.get(3).add(2);

        Solution solution = new Solution();
        boolean ans = solution.isCycle(V, adj);

        System.out.println(ans ? "1" : "0");
    }
}

// Helper class to store node and its parent in BFS
class Pair {
    int node;
    int parent;

    public Pair(int node, int parent) {
        this.node = node;
        this.parent = parent;
    }
}


--------------------------------------------------------
|  Cycle Detection in an Undirected Graph (using DFS)  |
--------------------------------------------------------



import java.util.*;

class Solution {

    // Helper method to check for cycle using DFS
    private boolean hasCycleDFS(int node, int parent, ArrayList<ArrayList<Integer>> adj, boolean[] visited) {
        visited[node] = true;

        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                if (hasCycleDFS(neighbor, node, adj, visited)) {
                    return true;
                }
            } else if (neighbor != parent) {
                return true; // Cycle detected
            }
        }
        return false;
    }

    // Main method to detect cycle in the graph
    public boolean isCycle(int V, ArrayList<ArrayList<Integer>> adj) {
        boolean[] visited = new boolean[V];

        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                if (hasCycleDFS(i, -1, adj, visited)) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int V = 4;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Adding edges
        adj.get(1).add(2);
        adj.get(2).add(1);
        adj.get(2).add(3);
        adj.get(3).add(2);

        Solution solution = new Solution();
        boolean ans = solution.isCycle(V, adj);

        System.out.println(ans ? "1" : "0");
    }
}



Output:  0

Time Complexity: O(N + 2E) + O(N), Where N = Nodes, 2E is for total degrees as we traverse all adjacent nodes. In the case of connected components of a graph, it will take another O(N) time.

Space Complexity: O(N) + O(N) ~ O(N), Space for queue data structure and visited array.`,

                    AdditionalResources: [
                        {
                            leetcode: "",
                            gfg: "https://www.geeksforgeeks.org/dsa/detect-cycle-in-an-undirected-graph-using-bfs/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
            ]
        },
        {
            Subsection: "Lec 3: Problems on Topo Sort",
            content: [
                {
                    Topic: "Topo Sort",
                    content: [
                        {
                            heading: "Topological Sort Algorithm with (DFS & Stack)",
                            content: [
                                {
                                    subheading: "Problem Statement:",
                                    para: "Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph."
                                },
                                {
                                    subheading: "Note:",
                                    para: "In topological sorting, node u will always appear before node v if there is a directed edge from node u towards node v(u -> v)."
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph55.png"
                                },
                                {
                                    image: "/static/Graph56.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "Topological sorting only exists in Directed Acyclic Graph (DAG). If the nodes of a graph are connected through directed edges and the graph does not contain a cycle, it is called a directed acyclic graph(DAG). \n\n The topological sorting of a directed acyclic graph is nothing but the linear ordering of vertices such that if there is an edge between node u and v(u -> v), node u appears before v in that ordering. \n\n Now, let's understand Why topological sort only exists in DAG: \n\n -> Case 1 (If the edges are undirected): If there is an undirected edge between node u and v, it signifies that there is an edge from node u to v(u -> v) as well as there is an edge from node v to u(v -> u). But according to the definition of topological sorting, it is practically impossible to write such ordering where u appears before v and v appears before u simultaneously. So, it is only possible for directed edges. \n\n -> Case 2(If the directed graph contains a cycle): The following directed graph contains a cycle:",
                                    image: "/static/Graph57.png"
                                },
                                {
                                    image: "/static/Graph58.png"
                                },
                                {
                                    subheading: "Intuition",
                                    para: "Since we are inserting the nodes into the stack after the completion of the traversal, we are making sure, there will be no one who appears afterward but may come before in the ordering as everyone during the traversal would have been inserted into the stack."
                                },
                                {
                                    subheading: "Note:",
                                    para: "Points to remember, that node will be marked as visited immediately after making the DFS call and before returning from the DFS call, the node will be pushed into the stack."
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/5lZ0iJMrUMk",
                    code: `import java.util.*;

class Solution {
    private static void dfs(int node, int vis[], Stack<Integer> st,
            ArrayList<ArrayList<Integer>> adj) {
        vis[node] = 1;
        for (int it : adj.get(node)) {
            if (vis[it] == 0)
                dfs(it, vis, st, adj);
        }
        st.push(node);
    }

    // Function to return list containing vertices in Topological order.
    static int[] topoSort(int V, ArrayList<ArrayList<Integer>> adj) {
        int vis[] = new int[V];
        Stack<Integer> st = new Stack<Integer>();
        for (int i = 0; i < V; i++) {
            if (vis[i] == 0) {
                dfs(i, vis, st, adj);
            }
        }

        int ans[] = new int[V];
        int i = 0;
        while (!st.isEmpty()) {
            ans[i++] = st.peek();
            st.pop();
        }
        return ans;
    }
}

public class tUf {
    public static void main(String[] args) {
        int V = 6;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        adj.get(2).add(3);
        adj.get(3).add(1);
        adj.get(4).add(0);
        adj.get(4).add(1);
        adj.get(5).add(0);
        adj.get(5).add(2);

        int[] ans = Solution.topoSort(V, adj);
        for (int node : ans) {
            System.out.print(node + " ");
        }
        System.out.println("");
    }
}
    


Output: 5 4 2 3 1 0

Time Complexity: O(V+E)+O(V), where V = no. of nodes and E = no. of edges. There can be at most V components. So, another O(V) time complexity.

Space Complexity: O(2N) + O(N) ~ O(2N): O(2N) for the visited array and the stack carried during DFS calls and O(N) for recursive stack space, where N = no. of nodes.

`,
                    AdditionalResources: [
                        {
                            leetcode: "https://www.geeksforgeeks.org/problems/topological-sort/1",
                            gfg: "https://www.geeksforgeeks.org/dsa/topological-sorting/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Kahn's Algorithm",
                    content: [
                        {
                            heading: "Kahn's Algorithm | Topological Sort Algorithm with (BFS & Queue)",
                            content: [
                                {
                                    subheading: "Problem Statement:",
                                    para: "Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph."
                                },
                                {
                                    subheading: "Note:",
                                    para: "In topological sorting, node u will always appear before node v if there is a directed edge from node u towards node v(u -> v)."
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph55.png"
                                },
                                {
                                    image: "/static/Graph56.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "Topological sorting only exists in Directed Acyclic Graph (DAG). If the nodes of a graph are connected through directed edges and the graph does not contain a cycle, it is called a directed acyclic graph(DAG). \n\n The topological sorting of a directed acyclic graph is nothing but the linear ordering of vertices such that if there is an edge between node u and v(u -> v), node u appears before v in that ordering. \n\n Now, let's understand Why topological sort only exists in DAG: \n\n -> Case 1 (If the edges are undirected): If there is an undirected edge between node u and v, it signifies that there is an edge from node u to v(u -> v) as well as there is an edge from node v to u(v -> u). But according to the definition of topological sorting, it is practically impossible to write such ordering where u appears before v and v appears before u simultaneously. So, it is only possible for directed edges. \n\n -> Case 2(If the directed graph contains a cycle): The following directed graph contains a cycle:",
                                    image: "/static/Graph59.png"
                                },
                                {
                                    subheading: "Approach",
                                    para: "Previously, we solved this question using the DFS traversal technique. But in this article,  we will apply the BFS(Breadth First Search) traversal technique. Breadth First Search or BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level."
                                },
                                {
                                    subheading: "Initial Configuration",
                                    para: "Indegree Array: Initially all elements are set to 0. Then, We will count the incoming edges for a node and store it in this array. For example, if indegree of node 3 is 2, indegree[3] = 2. \n\n -> Queue: As we will use BFS, a queue is required. Initially, the node with indegree 0 will be pushed into the queue. \n\n -> Answer array: Initially empty and is used to store the linear ordering."
                                },
                                {
                                    subheading: "The algorithm steps are as follows:",
                                    para: "First, we will calculate the indegree of each node and store it in the indegree array. We can iterate through the given adj list, and simply for every node u->v, we can increase the indegree of v by 1 in the indegree array. \n\n  -> Initially, there will be always at least a single node whose indegree is 0. So, we will push the node(s) with indegree 0 into the queue. \n\n -> Then, we will pop a node from the queue including the node in our answer array, and for all its adjacent nodes, we will decrease the indegree of that node by one. For example, if node u that has been popped out from the queue has an edge towards node v(u->v), we will decrease indegree[v] by 1. \n\n -> After that, if for any node the indegree becomes 0, we will push that node again into the queue. \n\n -> We will repeat steps 3 and 4 until the queue is completely empty. Finally, completing the BFS we will get the linear ordering of the nodes in the answer array.",
                                },
                                {
                                    subheading: "Let’s understand how to find the indegree(s): ",
                                    para: "By visiting the adjacency list, we can find out the indegrees for each node. For example, if node 3 is an adjacent node of node 2, we will just increase indegree[3] by 1 as the adjacency list suggests that node 3 has an incoming edge from node 2. \n\n Note: If you wish to see the dry run of the above approach, you can watch the video attached to this article. \n\n Let’s quickly understand the algorithm using the below graph:",
                                    image: "/static/Graph60.png",
                                },
                                {
                                    image: "/static/Graph61.png",
                                }
                            ]
                        }
                    ],
                    video: "https://youtu.be/XMiIk1B0v-w",
                    code: `import java.util.*;

class Solution {
    // Function to return list containing vertices in Topological order.
    static int[] topoSort(int V, ArrayList<ArrayList<Integer>> adj) {
        int indegree[] = new int[V];
        for (int i = 0; i < V; i++) {
            for (int it : adj.get(i)) {
                indegree[it]++;
            }
        }

        Queue<Integer> q = new LinkedList<Integer>();
        ;
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }

        int topo[] = new int[V];
        int i = 0;
        while (!q.isEmpty()) {
            int node = q.peek();
            q.remove();
            topo[i++] = node;
            // node is in your topo sort
            // so please remove it from the indegree

            for (int it : adj.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) {
                    q.add(it);
                }
            }
        }

        return topo;
    }
}

public class tUf {
    public static void main(String[] args) {
        int V = 6;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        adj.get(2).add(3);
        adj.get(3).add(1);
        adj.get(4).add(0);
        adj.get(4).add(1);
        adj.get(5).add(0);
        adj.get(5).add(2);

        int[] ans = Solution.topoSort(V, adj);
        for (int node : ans) {
            System.out.print(node + " ");
        }
        System.out.println("");
    }
}

    


Output: 4 5 0 2 3 1

Time Complexity: O(V+E), where V = no. of nodes and E = no. of edges. This is a simple BFS algorithm.

Space Complexity: O(N) + O(N) ~ O(2N), O(N) for the indegree array, and O(N) for the queue data structure used in BFS(where N = no.of nodes).



`,
                    AdditionalResources: [
                        {
                            leetcode: "https://www.geeksforgeeks.org/problems/topological-sort/1",
                            gfg: "https://www.geeksforgeeks.org/dsa/topological-sorting-indegree-based-solution/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Course Schedule I",
                    content: [
                        {
                            heading: "Course Schedule I",
                            content: [
                                {
                                    subheading: "Problem Statement I (Course Schedule):",
                                    para: "There are a total of n tasks you have to pick, labeled from 0 to n-1. Some tasks may have prerequisites tasks, for example, to pick task 0 you have to first finish tasks 1, which is expressed as a pair: [0, 1] \n\n Given the total number of n tasks and a list of prerequisite pairs of size m. Find the order of tasks you should pick to finish all tasks. \n\n Note: There may be multiple correct orders, you need to return one of them. If it is impossible to finish all tasks, return an empty array."
                                },
                                {
                                    subheading: "Problem Statement II (Pre-requisite Tasks): ",
                                    para: "There are a total of N tasks, labeled from 0 to N-1. Some tasks may have prerequisites, for example, to do task 0 you have to first complete task 1, which is expressed as a pair: [0, 1] \n\n Given the total number of tasks N and a list of prerequisite pairs P, find if it is possible to finish all tasks."
                                },
                                {
                                    subheading: "Notes:",
                                    para: "These two questions are linked. The second question asks if it is possible to finish all the tasks and the first question states to return the ordering of the tasks if it is possible to perform all the tasks, otherwise return an empty array."
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph62.png"
                                },
                                {
                                    image: "/static/Graph63.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "The solutions will be similar for both questions as we need to check for one, and in the other, we need to print the order. The questions state that the given pairs signify the dependencies of tasks. For example, the pair {u, v} signifies that to perform task v, first we need to finish task u. Now, if we closely observe, we can think of a directed edge between u and v(u -> v) where u and v are two nodes. Now, if we can think of each task as a node and every pair as a directed edge between those two nodes, the whole problem becomes a graph problem. \n\n Now, let’s analyze the examples from the graph point of view: \n\n For example 1, the number of tasks(considered as nodes) is 4, and pairs(considered as edges) are 3. If we draw the graph accordingly, the following illustration is produced:",
                                    image: "/static/Graph64.png"
                                },
                                {
                                    para: "Analyzing the graphs, we can conclude that performing all the tasks from the first set is possible because the first graph does not contain any cycle but as the second graph contains a cycle, performing all the tasks from the second set is impossible(there exists a cyclic dependency between the tasks). So, first, we need to identify a graph as a directed acyclic graph and if it is so we need to find out the linear ordering of the nodes as well(second part for the question: Course schedule). \n\n Now, we have successfully reduced the problem to one of our known concepts: Detect cycle in a directed graph. We will solve this problem using the Topological Sort Algorithm or Kahn’s Algorithm. \n\n Topological sorting only exists in Directed Acyclic Graph (DAG). If the nodes of a graph are connected through directed edges and the graph does not contain a cycle, it is called a directed acyclic graph(DAG). \n\n The topological sorting of a directed acyclic graph is nothing but the linear ordering of vertices such that if there is an edge between node u and v(u -> v), node u appears before v in that ordering. \n\n For the second problem, we can also apply the algorithm used in the detection of cycles in a directed graph (using DFS) where we used to find out if the graph has a cycle or not. But to solve the first question we have to figure out the linear ordering of the task as well. So, we will use the topological sort algorithm for both questions.",
                                },
                                {
                                    subheading: "Initial",
                                    para: "For problem I, the intuition is to find the linear ordering in which the tasks will be performed if it is possible to perform all the tasks otherwise, to return an empty array. \n\n For problem II, the intuition is to find if it is possible to perform all the tasks(i.e. The graph contains a cycle or not)."
                                },
                                {
                                    subheading: "Approach",
                                    para: "We will apply the BFS(Breadth First Search) traversal technique. Breadth First Search or BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level.",
                                },
                                {
                                    subheading: "Initial Configuration",
                                    para: "Indegree Array: Initially all elements are set to 0. Then, We will count the incoming edges for a node and store it in this array. For example, if the indegree of node 3 is 2, indegree[3] = 2. \n\n -> Queue: As we will use BFS, a queue is required. Initially, the node with indegree 0 will be pushed into the queue. \n\n -> Answer array: Initially empty and is used to store the linear ordering."
                                },
                                {
                                    subheading: "The algorithm steps are as follows:",
                                    para: "-> First, we will form the adjacency list of the graph using the pairs. For example, for the pair {u, v} we will add node v as an adjacent node of u in the list. \n\n ->Then, we will calculate the in-degree of each node and store it in the indegree array. We can iterate through the given adj list, and simply for every node u->v, we can increase the indegree of v by 1 in the indegree array. \n\n -> Initially, there will be always at least a single node whose indegree is 0. So, we will push the node(s) with indegree 0 into the queue. \n\n -> Then, we will pop a node from the queue including the node in our answer array, and for all its adjacent nodes, we will decrease the indegree of that node by one. For example, if node u that has been popped out from the queue has an edge towards node v(u->v), we will decrease indegree[v] by 1. \n\n -> After that, if for any node the indegree becomes 0, we will push that node again into the queue. \n\n -> We will repeat steps 3 and 4 until the queue is completely empty. Now, completing the BFS we will get the linear ordering of the nodes in the answer array. \n\n -> For the first problem(Course Schedule): We will return the answer array if the length of the ordering equals the number of tasks. Otherwise, we will return an empty array. \n\n -> For the Second problem(Prerequisite tasks): We will return true if the length of the ordering equals the number of tasks. otherwise, we will return false. \n\n Note: If you wish to see the dry run of the above approach, you can watch the video attached to this article."
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/WAOfKpxYHR8",
                    code: `
                    
import java.util.*;

class Solution {
    static int[] findOrder(int n, int m, ArrayList<ArrayList<Integer>> prerequisites) {
        // Form a graph
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        for (int i = 0; i < m; i++) {
            adj.get(prerequisites.get(i).get(1)).add(prerequisites.get(i).get(0));
        }



        int indegree[] = new int[n];
        for (int i = 0; i < n; i++) {
            for (int it : adj.get(i)) {
                indegree[it]++;
            }
        }


        Queue<Integer> q = new LinkedList<Integer>();
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }


        int topo[] = new int[n];
        int ind = 0;
        // o(v + e)
        while (!q.isEmpty()) {
            int node = q.peek();

            q.remove();
            topo[ind++] = node;
            // node is in your topo sort
            // so please remove it from the indegree

            for (int it : adj.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) q.add(it);
            }
        }


        if (ind == n) return topo;
        int[] arr = {};
        return arr;
    }
}

public class tUf {
    public static void main(String[] args) {
        int N = 4;
        int M = 3;
        ArrayList<ArrayList<Integer>> prerequisites = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            prerequisites.add(i, new ArrayList<>());
        }


        prerequisites.get(0).add(0);
        prerequisites.get(0).add(1);

        prerequisites.get(1).add(1);
        prerequisites.get(1).add(2);

        prerequisites.get(2).add(2);
        prerequisites.get(2).add(3);

        int[] ans = Solution.findOrder(N, M, prerequisites);

        for (int task : ans) {
            System.out.print(task + " ");
        }
        System.out.println("");
    }
}

Output: 3 2 1 0



--------------------------------------------
|        Code (Pre-requisite Tasks):       |
--------------------------------------------

import java.util.*;


class Solution {
    public boolean isPossible(int V, int[][] prerequisites) {
        // Form a graph
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        int m = prerequisites.length;
        for (int i = 0; i < m; i++) {
            adj.get(prerequisites[i][0]).add(prerequisites[i][1]);
        }



        int indegree[] = new int[V];
        for (int i = 0; i < V; i++) {
            for (int it : adj.get(i)) {
                indegree[it]++;
            }
        }


        Queue<Integer> q = new LinkedList<Integer>();
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }


        List<Integer> topo = new ArrayList<Integer>();
        // o(v + e)
        while (!q.isEmpty()) {
            int node = q.peek();

            q.remove();
            topo.add(node);
            // node is in your topo sort
            // so please remove it from the indegree

            for (int it : adj.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) q.add(it);
            }
        }


        if (topo.size() == V) return true;
        return false;

    }

}

public class tUf {
    public static void main(String[] args) {
        int N = 4;
        int[][] prerequisites = new int[3][2];
        prerequisites[0][0] = 1;
        prerequisites[0][1] = 0;

        prerequisites[1][0] = 2;
        prerequisites[1][1] = 1;

        prerequisites[2][0] = 3;
        prerequisites[2][1] = 2;

        Solution obj = new Solution();
        boolean ans = obj.isPossible(N, prerequisites);
        if (ans)
            System.out.println("YES");
        else
            System.out.println("NO");
    }
}




Output: YES

Time Complexity: O(V+E), where V = no. of nodes and E = no. of edges. This is a simple BFS algorithm.

Space Complexity: O(N) + O(N) ~ O(2N), O(N) for the indegree array, and O(N) for the queue data structure used in BFS(where N = no.of nodes). Extra O(N) for storing the topological sorting. Total ~ O(3N).


`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/course-schedule/description/",
                            gfg: "https://www.geeksforgeeks.org/competitive-programming/cses-solutions-course-schedule/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Find Eventual Safe States - BFS",
                    content: [
                        {
                            heading: "Course Schedule I",
                            content: [
                                {
                                    subheading: "Problem Statement I (Course Schedule):",
                                    para: "A directed graph of V vertices and E edges is given in the form of an adjacency list adj. Each node of the graph is labeled with a distinct integer in the range 0 to V - 1. A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node. You have to return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph65.png"
                                },
                                {
                                    image: "/static/Graph66.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "A terminal node is a node without any outgoing edges(i.e outdegree = 0). Now a node is considered to be a safe node if all possible paths starting from it lead to a terminal node. Here we need to find out all safe nodes and return them sorted in ascending order. If we closely observe, all possible paths starting from a node are going to end at some terminal node unless there exists a cycle and the paths return back to themselves. Let’s understand it considering the below graph:",
                                    image: "/static/Graph67.png"
                                },
                                {
                                    para: "So, the intuition is to figure out the nodes which are neither a part of a cycle nor connected to the cycle. We have previously solved this problem using the DFS traversal technique. Now, we are going to solve it using the BFS traversal technique especially using the topological sort algorithm. The topological sort algorithm will automatically exclude the nodes which are either forming a cycle or connected to a cycle. Note: Points to remember that any node which is a part of a cycle or leads to the cycle through an incoming edge towards the cycle, cannot be a safe node. Apart from these types of nodes, every node is a safe node.",
                                },
                                {
                                    subheading: "Approach",
                                    para: "The node with outdegree 0 is considered to be a terminal node but the topological sort algorithm deals with the indegrees of the nodes. So, to use the topological sort algorithm, we will reverse every edge of the graph. Now, the nodes with indegree 0 become the terminal nodes. After this step, we will just follow the topological sort algorithm as it is.",
                                    image: "/static/Graph68.png"
                                },
                                {
                                    para: "We will apply the BFS(Breadth First Search) traversal technique. Breadth First Search or BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level.",
                                },
                                {
                                    subheading: "Initial Configuration",
                                    para: "Indegree Array: Initially all elements are set to 0. Then, We will count the incoming edges for a node and store it in this array. For example, if indegree of node 3 is 2, indegree[3] = 2. If you don’t know how to find indegrees, you can refer to the step 2 in the algorithm. \n\n Queue: As we will use BFS, a queue is required. Initially, the node with indegree 0 will be pushed into the queue.",
                                },
                                {
                                    subheading: "The Algorithm steps are as follows:",
                                    para: "-> First, we will reverse all the edges of the graph so that we can apply the topological sort algorithm afterward. \n\n -> Then, we will calculate the indegree of each node and store it in the indegree array. We can iterate through the given adj list, and simply for every node u->v, we can increase the indegree of v by 1 in the indegree array \n\n -> Then, we will push the node(s) with indegree 0 into the queue. \n\n -> Then, we will pop a node from the queue including the node in our safeNodes array, and for all its adjacent nodes, we will decrease the indegree of that node by one. For example, if node u that has been popped out from the queue has an edge towards node v(u->v), we will decrease indegree[v] by 1. \n\n -> After that, if for any node the indegree becomes 0, we will push that node again into the queue. \n\n -> We will repeat steps 3 and 4 until the queue is completely empty. Finally, completing the BFS we will get the linear ordering of the nodes in the safeNodes array. \n\n -> Finally, the safeNodes array will only consist of the nodes that are neither a part of any cycle nor connected to any cycle. Then we will sort the final safeNodes array as the question requires the answer in sorted order. \n\n -> Note: If you wish to see the dry run of the above approach, you can watch the video attached to this article."
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/2gtg3VsDGyc",
                    code: `
                    
import java.util.*;


class Solution {
    List<Integer> eventualSafeNodes(int V, List<List<Integer>> adj) {
        List<List<Integer>> adjRev = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adjRev.add(new ArrayList<>());
        }
        int indegree[] = new int[V];
        for (int i = 0; i < V; i++) {
            // i -> it
            // it -> i
            for (int it : adj.get(i)) {
                adjRev.get(it).add(i);
                indegree[i]++;
            }
        }
        Queue<Integer> q = new LinkedList<>();
        List<Integer> safeNodes = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }

        while (!q.isEmpty()) {
            int node = q.peek();
            q.remove();
            safeNodes.add(node);
            for (int it : adjRev.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) q.add(it);
            }
        }
        Collections.sort(safeNodes);
        return safeNodes;
    }
}

public class tUf {
    public static void main(String[] args) {
        int V = 12;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        adj.get(0).add(1);
        adj.get(1).add(2);
        adj.get(2).add(3);
        adj.get(2).add(4);
        adj.get(3).add(4);
        adj.get(3).add(5);
        adj.get(4).add(6);
        adj.get(5).add(6);
        adj.get(6).add(7);
        adj.get(8).add(1);
        adj.get(8).add(9);
        adj.get(9).add(10);
        adj.get(10).add(8);
        adj.get(11).add(9);

        Solution obj = new Solution();
        List<Integer> safeNodes = obj.eventualSafeNodes(V, adj);

        for (int node : safeNodes) {
            System.out.print(node + " ");
        }
        System.out.println("");
    }
}


Output : 0 1 2 3 4 5 6 7

Time Complexity: O(V+E)+O(N*logN), where V = no. of nodes and E = no. of edges. This is a simple BFS algorithm. Extra O(N*logN) for sorting the safeNodes array, where N is the number of safe nodes.

Space Complexity: O(N) + O(N) + O(N) ~ O(3N), O(N) for the indegree array, O(N) for the queue data structure used in BFS(where N = no.of nodes), and extra O(N) for the adjacency list to store the graph in a reversed order.




`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/find-eventual-safe-states/description/",
                            gfg: "https://www.geeksforgeeks.org/dsa/eventual-safe-states/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Alien Dictionary",
                    content: [
                        {
                            heading: "Alien Dictionary",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given a sorted dictionary of an alien language having N words and k starting alphabets of a standard dictionary. Find the order of characters in the alien language \n\n Note: Many orders may be possible for a particular test case, thus you may return any valid order.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph69.png"
                                },
                                {
                                    image: "/static/Graph70.png"
                                },
                                {
                                    subheading: "Solution",
                                    image: "/static/Graph71.png"
                                },
                                {
                                    image: "/static/Graph72.png"
                                },
                                {
                                    subheading: "The follow-up question for the interview:",
                                    para: "When is the ordering not possible? \n\n There are two such cases when ordering is not possible: \n\n -> If every character matches and the largest word appears before the shortest word: For example, if “abcd” appears before “abc”, we can say the ordering is not possible. \n\n -> If there exists a cyclic dependency between the characters: For example, in the dictionary: dict: {“abc”, “bat”, “ade”} there exists a cyclic dependency between ‘a’ and ‘b’ because the dictionary states ‘a’ < ‘b’ < ‘a’, which is not possible.",
                                },
                                {
                                    subheading: "Approach",
                                    para: "We will apply the BFS(Breadth First Search) traversal technique. Breadth First Search or BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level.",
                                },
                                {
                                    subheading: "Initial Configuration",
                                    para: "-> Adjacency List: Initially it will be empty and we will create this adjacency list comparing the consecutive pair of words. \n\n -> Indegree Array: Initially all elements are set to 0. Then, We will count the incoming edges for a node and store it in this array. For example, if the indegree of node 3 is 2, indegree[3] = 2. \n\n -> Queue: As we will use BFS, a queue is required. Initially, the node with indegree 0 will be pushed into the queue. \n\n -> Answer array(topo): Initially empty and is used to store the linear ordering.",
                                },
                                {
                                    subheading: "The Algorithm steps are as follows:",
                                    image: "/static/Graph73.png"
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/U3N_je7tWAs",
                    code: `
                    
import java.util.*;


class Solution {
    private List<Integer> topoSort(int V, List<List<Integer>> adj) {
        int indegree[] = new int[V];
        for (int i = 0; i < V; i++) {
            for (int it : adj.get(i)) {
                indegree[it]++;
            }
        }

        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }
        List<Integer> topo = new ArrayList<>();
        while (!q.isEmpty()) {
            int node = q.peek();
            q.remove();
            topo.add(node);
            // node is in your topo sort
            // so please remove it from the indegree

            for (int it : adj.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) q.add(it);
            }
        }

        return topo;
    }
    public String findOrder(String [] dict, int N, int K) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < K; i++) {
            adj.add(new ArrayList<>());
        }


        for (int i = 0; i < N - 1; i++) {
            String s1 = dict[i];
            String s2 = dict[i + 1];
            int len = Math.min(s1.length(), s2.length());
            for (int ptr = 0; ptr < len; ptr++) {
                if (s1.charAt(ptr) != s2.charAt(ptr)) {
                    adj.get(s1.charAt(ptr) - 'a').add(s2.charAt(ptr) - 'a');
                    break;
                }
            }
        }

        List<Integer> topo = topoSort(K, adj);
        String ans = "";
        for (int it : topo) {
            ans = ans + (char)(it + (int)('a'));
        }

        return ans;

    }
}

public class tUf {
    public static void main(String[] args) {
        int N = 5, K = 4;
        String[] dict = {"baa", "abcd", "abca", "cab", "cad"};
        Solution obj = new Solution();
        String ans = obj.findOrder(dict, N, K);

        for (int i = 0; i < ans.length(); i++) {
            System.out.print(ans.charAt(i) + " ");
        }
        System.out.println("");
    }
}


Output: b d a c 

Time Complexity: O(N*len)+O(K+E), where N is the number of words in the dictionary, ‘len’ is the length up to the index where the first inequality occurs, K = no. of nodes, and E = no. of edges.

Space Complexity: O(K) + O(K)+O(K)+O(K) ~ O(4K), O(K) for the indegree array, and O(K) for the queue data structure used in BFS(where K = no.of nodes), O(K) for the answer array and O(K) for the adjacency list used in the algorithm.
`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/alien-dictionary/editorial/",
                            gfg: "https://www.geeksforgeeks.org/dsa/given-sorted-dictionary-find-precedence-characters/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
            ]
        },
    ],
    Section: "Step 8: Bit Manipulation",
    content: [
        {
            Subsection: "Lec 1: Learn Bit Manipulation",
            content: [
                {
                    Topic: "Introduction to Bit Manipulation",
                    content: [
                        {
                            heading: "Bit Manipulation",
                            content: [
                                {
                                    subheading: "Introduction",
                                    para: "Bit manipulation refers to performing operations directly on the binary representation of integers using bitwise operators. It is one of the most powerful tools in Data Structures and Algorithms (DSA) because:  \n\n -> It is fast (operations are O(1), done directly at CPU level). \n\n -> It allows solving problems with low memory usage. \n\n -> Many mathematical problems (power, parity, subsets, masks) can be solved elegantly. \n\n -> Understanding bit tricks is crucial for competitive programming, interview problems, and low-level optimizations.",
                                    image: "/static/Bit1.png"
                                },
                                {
                                    image: "/static/Bit2.png"
                                },
                                {
                                    image: "/static/Bit3.png"
                                },
                                {
                                    subheading: "🧠 Why is it useful?",
                                    para: "Speeds up problems involving sets, masks, and toggles. \n\n -> Essential for solving problems in dynamic programming on subsets (bitmask DP). \n\n -> Frequently appears in interviews (e.g., Microsoft, Google, Amazon).",
                                },
                                {
                                    subheading: "✍️ Summary",
                                    para: "Bit manipulation works at the binary level, making operations extremely efficient.\n\n -> Key skills include checking, setting, clearing, toggling, and counting bits. \n\n -> Advanced uses: XOR problems, fast exponentiation, subset generation, DP with bitmasks, cryptography. \n\n -> Rule of thumb: When you see constraints with “powers of 2” or problems about subsets, think bit manipulation.",
                                },
                            ]
                        },
                    ],
                    video: "https://youtu.be/qQd-ViW7bfk",
                    code: `#Introduction to Bit Manipulation`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/explore/learn/card/graph/",
                            gfg: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/watch?v=qQd-ViW7bfk&list=PLgUwDviBIf0rnqh8QsJaHyIX7KUiaPUv7",
                        },
                    ]
                },
                {
                    Topic: "Check if the i-th bit is set or not",
                    content: [
                        {
                            heading: "Check if the i-th bit is set or not",
                            content: [
                                {
                                    subheading: "Problem Statement:",
                                    para: "Given two integers n and i, return true if the ith bit in the binary representation of n (counting from the least significant bit, 0-indexed) is set (i.e., equal to 1). Otherwise, return false."
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Bit4.png"
                                },
                                {
                                    subheading: "Brute Force Approach",
                                    image: "/static/Bit5.png"
                                },
                            ]
                        },
                    ],
                    video: "https://youtu.be/nttpF8kwgd4",
                    code: `// Solution class containing the checkIthBit function
class Solution {
    // Function to check if the i-th bit of number n is set (1)
    public boolean checkIthBit(int n, int i) {
        return (n & (1 << i)) != 0;  // Bit manipulation check
    }
}

// Main class to test the Solution class
public class Main {
    public static void main(String[] args) {
        Solution sol = new Solution();
        int num = 5;      // Binary: 101
        int bitIndex = 2; // Check the 2nd bit (0-based index)

        if (sol.checkIthBit(num, bitIndex)) {
            System.out.println("The " + bitIndex + "-th bit of " + num + " is set (1).");
        } else {
            System.out.println("The " + bitIndex + "-th bit of " + num + " is not set (0).");
        }
    }
}
 

📌 Example Run

For num = 5 (binary 101):
Bit 0 → 1 (set)
Bit 1 → 0 (not set)
Bit 2 → 1 (set)
So if bitIndex = 2, output will be:
The 2-th bit of 5 is set (1).


⚡ Complexity

Time Complexity: O(1) (only one & and one shift)
Space Complexity: O(1)


`,
                    AdditionalResources: [
                        {
                            leetcode: "https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1",
                            gfg: "https://www.geeksforgeeks.org/dsa/check-whether-k-th-bit-set-not/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Check if a number is odd or not",
                    content: [
                        {
                            heading: "Check if a number is odd or not",
                            content: [
                                {
                                    heading: "Problem Statement:",
                                    para: "Given a non-negative integer n, determine whether it is odd. Return true if the number is odd, otherwise return false. A number is odd if it is not divisible by 2 (i.e., n % 2 != 0).",
                                    image: "/static/Bit6.png"
                                },
                            ]
                        },
                    ],
                    video: "https://youtu.be/nttpF8kwgd4",
                    code: `
public class OddCheck {
    public static void main(String[] args) {
        int n = 7;  // try changing this value

        if ((n & 1) == 1) {
            System.out.println(n + " is odd.");
        } else {
            System.out.println(n + " is even.");
        }
    }
}

📌 Example Runs
n = 7 → binary = 111 → 111 & 001 = 1 → odd ✅
n = 8 → binary = 1000 → 1000 & 0001 = 0 → even ✅

⚡ Complexity
Time: O(1)
Space: O(1)
`,
                    AdditionalResources: [
                        {
                            leetcode: "",
                            gfg: "",
                            VisuAlgo: "",
                            youtubePlaylist: "",
                        },
                    ]
                },
                {
                    Topic: "Check if a number is odd or not",
                    content: [
                        {
                            heading: "Check if a number is power of 2 or not",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two if there exists an integer x such that n == 2ˣ."
                                },
                                {
                                    headings: "Examples",
                                    image: "/static/Graph24.png"
                                },
                                {
                                    image: "/static/Graph25.png"
                                },
                                {
                                    image: "/static/Graph26.png"
                                },
                                {
                                    image: "/static/Graph27.gif"
                                },
                            ]
                        },

                    ],
                    video: "https://youtu.be/-tgVpUgsQ5k?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                    code: `
import java.util.*;
class Solution {
    // Function to return Breadth First Traversal of given graph.
    public ArrayList<Integer> bfsOfGraph(int V, 
    ArrayList<ArrayList<Integer>> adj) {
        
        ArrayList < Integer > bfs = new ArrayList < > ();
        boolean vis[] = new boolean[V];
        Queue < Integer > q = new LinkedList < > ();

        q.add(0);
        vis[0] = true;

        while (!q.isEmpty()) {
            Integer node = q.poll();
            bfs.add(node);

            // Get all adjacent vertices of the dequeued vertex s
            // If a adjacent has not been visited, then mark it
            // visited and enqueue it
            for (Integer it: adj.get(node)) {
                if (vis[it] == false) {
                    vis[it] = true;
                    q.add(it);
                }
            }
        }

        return bfs;
    }
    
    public static void main(String args[]) {

        ArrayList < ArrayList < Integer >> adj = new ArrayList < > ();
        for (int i = 0; i < 5; i++) {
            adj.add(new ArrayList < > ());
        }
        adj.get(0).add(1);
        adj.get(1).add(0);
        adj.get(0).add(4);
        adj.get(4).add(0);
        adj.get(1).add(2);
        adj.get(2).add(1);
        adj.get(1).add(3);
        adj.get(3).add(1);
        
        Solution sl = new Solution(); 
        ArrayList < Integer > ans = sl.bfsOfGraph(5, adj);
        int n = ans.size(); 
        for(int i = 0;i<n;i++) {
            System.out.print(ans.get(i)+" "); 
        }
    }
}


Output: 0 1 4 2 3

Time Complexity: O(N) + O(2E), Where N = Nodes, 2E is for total degrees as we traverse all adjacent nodes.

Space Complexity: O(3N) ~ O(N), Space for queue data structure visited array and an adjacency list
`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/explore/learn/card/graph/",
                            gfg: "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "DFS",
                    content: [
                        {
                            heading: "Graph Representation in Java",
                            content: [
                                {
                                    subheading: "Representations of Graph",
                                    para: "Here are the two most common ways to represent a graph : For simplicity, we are going to consider only unweighted graphs in this post. \n\n Adjacency Matrix \n Adjacency List"
                                },
                                {
                                    subheading: "Adjacency Matrix Representation",
                                    para: "An adjacency matrix is a way of representing a graph as a matrix of boolean (0's and 1's) \n\n Let's assume there are n vertices in the graph So, create a 2D matrix adjMat[n][n] having dimension n x n. \n\n If there is an edge from vertex i to j, mark adjMat[i][j] as 1.  \n If there is no edge from vertex i to j, mark adjMat[i][j] as 0."
                                },
                                {
                                    subheading: "Representation of Undirected Graph as Adjacency Matrix:",
                                    para: "The below figure shows an undirected graph. Initially, the entire Matrix is ​initialized to 0. If there is an edge from source to destination, we insert 1 to both cases (adjMat[source][destination] and adjMat[destination][source]) because we can go either way.",
                                    image: "/static/Graph14.png"
                                },
                                {
                                    subheading: "Representation of Directed Graph as Adjacency Matrix:",
                                    para: "The below figure shows a directed graph. Initially, the entire Matrix is ​​initialized to 0. If there is an edge from source to destination, we insert 1 for that particular adjMat[source][destination].",
                                    image: "/static/Graph15.png"
                                },
                            ]
                        },
                        {
                            heading: "Adjacency List Representation",
                            content: [
                                {
                                    para: "An array of Lists is used to store edges between two vertices. The size of array is equal to the number of vertices (i.e, n). Each index in this array represents a specific vertex in the graph. The entry at the index i of the array contains a linked list containing the vertices that are adjacent to vertex i. Let's assume there are n vertices in the graph So, create an array of list of size n as adjList[n]. \n\n adjList[0] will have all the nodes which are connected (neighbour) to vertex 0.\n adjList[1] will have all the nodes which are connected (neighbour) to vertex 1 and so on.",
                                },
                                {
                                    subheading: "Representation of Undirected Graph as Adjacency List:",
                                    para: "The below undirected graph has 3 vertices. So, an array of list will be created of size 3, where each indices represent the vertices. Now, vertex 0 has two neighbours (i.e, 1 and 2). So, insert vertex 1 and 2 at indices 0 of array. Similarly, For vertex 1, it has two neighbour (i.e, 2 and 0) So, insert vertices 2 and 0 at indices 1 of array. Similarly, for vertex 2, insert its neighbours in array of list.",
                                    image: "/static/Graph16.png"
                                },
                                {
                                    subheading: "Representation of Directed Graph as Adjacency List:",
                                    para: "The below directed graph has 3 vertices. So, an array of list will be created of size 3, where each indices represent the vertices. Now, vertex 0 has no neighbours. For vertex 1, it has two neighbour (i.e, 0 and 2) So, insert vertices 0 and 2 at indices 1 of array. Similarly, for vertex 2, insert its neighbours in array of list.",
                                    image: "/static/Graph17.png"
                                },
                            ]
                        },
                    ],
                    video: "https://youtu.be/OsNklbh9gYI?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                    code: `
import java.util.*;
`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/explore/learn/card/graph/",
                            gfg: "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
            ]
        },
        {
            Subsection: "Lec 2: Problems on BFS-DFS",
            content: [
                {
                    Topic: "Number of Provinces",
                    content: [
                        {
                            heading: "Number of Provinces",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given an undirected graph with V vertices. We say two vertices u and v belong to a single province if there is a path from u to v or v to u. Your task is to find the number of provinces.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph28.png"
                                },
                                {
                                    subheading: "Approach",
                                    image: "/static/Graph29.png"
                                },
                                {
                                    image: "/static/Graph30.gif"
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/ACzkVtewUYA",
                    code: `import java.util.*;

class Solution {
    // dfs traversal function 
    private static void dfs(int node, ArrayList<ArrayList<Integer>> adjLs , int vis[]) {
        vis[node] = 1; 
        for(Integer it: adjLs.get(node)) {
            if(vis[it] == 0) {
                dfs(it, adjLs, vis); 
            }
        }
    }
    static int numProvinces(ArrayList<ArrayList<Integer>> adj, int V) {
        ArrayList<ArrayList<Integer>> adjLs = new ArrayList<ArrayList<Integer>>(); 
        for(int i = 0;i<V;i++) {
            adjLs.add(new ArrayList<Integer>()); 
        }
        
        // to change adjacency matrix to list 
        for(int i = 0;i<V;i++) {
            for(int j = 0;j<V;j++) {
                // self nodes are not considered 
                if(adj.get(i).get(j) == 1 && i != j) {
                    adjLs.get(i).add(j); 
                    adjLs.get(j).add(i); 
                }
            }
        }
        int vis[] = new int[V]; 
        int cnt = 0; 
        for(int i = 0;i<V;i++) {
            if(vis[i] == 0) {
               cnt++;
               dfs(i, adjLs, vis); 
            }
        }
        return cnt; 
    }
    public static void main(String[] args)
    {

        // adjacency matrix 
        ArrayList<ArrayList<Integer> > adj = new ArrayList<ArrayList<Integer> >();

        adj.add(new ArrayList<Integer>());
        adj.get(0).add(0, 1);
        adj.get(0).add(1, 0);
        adj.get(0).add(2, 1);
        adj.add(new ArrayList<Integer>());
        adj.get(1).add(0, 0);
        adj.get(1).add(1, 1);
        adj.get(1).add(2, 0);
        adj.add(new ArrayList<Integer>());
        adj.get(2).add(0, 1);
        adj.get(2).add(1, 0);
        adj.get(2).add(2, 1);
                
        Solution ob = new Solution();
        System.out.println(ob.numProvinces(adj,3));
    }
};




Output: 2

Time Complexity: O(N) + O(V+2E), Where O(N) is for outer loop and inner loop runs in total a single DFS over entire graph, and we know DFS takes a time of O(V+2E). 

Space Complexity: O(N) + O(N),Space for recursion stack space and visited array.`,

                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/number-of-provinces/description/",
                            gfg: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Connected Components Problem in Matrix",
                    content: [
                        {
                            heading: "Connected Components Problem in a Matrix",
                            content: [
                                {
                                    para: "The Connected Components Problem in a matrix refers to identifying distinct regions in a matrix where connected cells satisfy certain conditions (e.g., having the same value like 1). These regions or groups are called connected components.",
                                },
                                {
                                    image: "/static/Graph31.png"
                                },
                                {
                                    subheading: "✅ Definitions",
                                    para: "Connected component: A set of cells where each cell is connected to others through a path of adjacent cells. \n\n Adjacency: \n\n 4-directional: Up, down, left, right. \n 8-directional: Up, down, left, right, and diagonals."
                                },
                                {
                                    image: "/static/Graph32.gif"
                                },
                            ]
                        },
                        {
                            heading: "✅ DFS Approach (4-directional adjacency)",
                            content: [
                                {
                                    image: "/static/Graph33.png"
                                },
                                {
                                    image: "/static/Graph34.png"
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/9esCn0awd5k",
                    code: `public class ConnectedComponentsDFS {

    // Directions for 4-connected neighbors (up, down, left, right)
    private static final int[] rowDirections = {-1, 1, 0, 0};
    private static final int[] colDirections = {0, 0, -1, 1};

    public static int countConnectedComponents(int[][] matrix) {
        if (matrix == null || matrix.length == 0) {
            return 0;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        boolean[][] visited = new boolean[rows][cols];
        int count = 0;

        // Iterate over every cell in the matrix
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                // If the cell is 1 and not visited, it's a new component
                if (matrix[r][c] == 1 && !visited[r][c]) {
                    dfs(matrix, visited, r, c, rows, cols);
                    count++; // Increment the count for this component
                }
            }
        }
        return count;
    }

    private static void dfs(int[][] matrix, boolean[][] visited, int r, int c, int rows, int cols) {
        // Boundary checks
        if (r < 0 || r >= rows || c < 0 || c >= cols) {
            return;
        }
        // Skip if already visited or if it's not part of a component
        if (visited[r][c] || matrix[r][c] == 0) {
            return;
        }

        visited[r][c] = true; // Mark current cell as visited

        // Explore all 4 directions
        for (int d = 0; d < 4; d++) {
            int newRow = r + rowDirections[d];
            int newCol = c + colDirections[d];
            dfs(matrix, visited, newRow, newCol, rows, cols);
        }
    }

    // Main method to test the implementation
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 1, 0, 0},
            {0, 1, 0, 0},
            {0, 0, 1, 1},
            {0, 0, 0, 1}
        };

        int result = countConnectedComponents(matrix);
        System.out.println("Number of connected components: " + result);
    }
}
`,

                    AdditionalResources: [
                        {
                            leetcode: "",
                            gfg: "",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "",
                        },
                    ]
                },
                {
                    Topic: "Rotten Oranges",
                    content: [
                        {
                            heading: "Rotten Oranges : Min time to rot all oranges : BFS",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "You will be given an m x n grid, where each cell has the following values : \n\n 2  -  represents a rotten orange \n 1  -  represents a Fresh orange \n 0  -  represents an Empty Cell \n\n Every minute, if a Fresh Orange is adjacent to a Rotten Orange in 4-direction ( upward, downwards, right, and left ) it becomes Rotten. \n\n Return the minimum number of minutes required such that none of the cells has a Fresh Orange. If it's not possible, return -1.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph35.png"
                                },
                                {
                                    image: "/static/Graph36.png"
                                },
                                {
                                    subheading: "Solution Approach",
                                    para: "The idea is that for each rotten orange, we will find how many fresh oranges there are in its 4 directions. If we find any fresh orange we will make it into a rotten orange. One rotten orange can rotten up to 4 fresh oranges present in its 4 directions. For this problem,  we will be using the BFS ( Breadth-First Search ) technique.",
                                    image: "/static/Graph37.png"
                                },
                                {
                                    subheading: "Steps to be followed",
                                    para: "-> First of all we will create a Queue data structure to store coordinate of Rotten Oranges \n\n We will also have variables as: \n\n Total_oranges - It will store total number of oranges in the grid ( Rotten + Fresh ) \n Count - It will store the total number of oranges rotten by us .  \n\n Total_time - total time taken to rotten. \n\n -> After this, we will traverse the whole grid and count the total number of oranges in the grid and store it in Total_oranges. Then we will also push the rotten oranges in the Queue data structure as well. \n\n -> Now while our queue is not empty,  we will pick up each Rotten Orange and check in all its 4 directions whether a Fresh orange is present or not. If it is present we will make it rotten and push it in our queue data structure and pop out the Rotten Orange which we took up as its work is done now. \n\n -> Also we will keep track of the count of rotten oranges we are getting. \n\n -> If we rotten some oranges, then obviously our queue will not be empty. In that case, we will increase our total time. This goes on until our queue becomes empty. \n\n -> After it becomes empty, We will check whether the total number of oranges initially is equal to the current count of oranges. If yes, we will return the total time taken, else will return -1 because some fresh oranges are still left and can’t be made rotten."
                                }
                            ]
                        }
                    ],
                    video: "https://youtu.be/yf3oUhkvqA0",
                    code: `import java.util.*;
class TUF{
public static int orangesRotting(int[][] grid) {
        if(grid == null || grid.length == 0) return 0;
        int rows = grid.length;
        int cols = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        int count_fresh = 0;
        //Put the position of all rotten oranges in queue
        //count the number of fresh oranges
        for(int i = 0 ; i < rows ; i++) {
            for(int j = 0 ; j < cols ; j++) {
                if(grid[i][j] == 2) {
                    queue.offer(new int[]{i , j});
                }
                if(grid[i][j] != 0) {
                    count_fresh++;
                }
            }
        }
       
        if(count_fresh == 0) return 0;
        int minutes = 0;
        int dx[] = {0, 0, 1, -1};
        int dy[] = {1, -1, 0, 0};
        
        //bfs starting from initially rotten oranges
        while(!queue.isEmpty()) {
            int size = queue.size();
            boolean rottedThisRound = false;
            for(int i = 0 ; i < size ; i++) {
                int[] point = queue.poll();
                for(int j = 0;j<4;j++) {
                    int x = point[0] + dx[j];
                    int y = point[1] + dy[j];
                    
                    if(x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] == 0 || 
                    grid[x][y] == 2) continue;
                    
                    grid[x][y] = 2;
                    queue.offer(new int[]{x , y});
                    count_fresh--;
                    rottedThisRound = true;

                }
            }
            if(rottenThisRound) {
                minutes++;
            }
        }
        return count_fresh == 0 ? minutes : -1;
    }
    public static void main(String args[])
    {
        int arr[][]={ {2,1,1} , {1,1,0} , {0,1,1} };
        int rotting = orangesRotting(arr);
        System.out.println("Minimum Number of Minutes Required "+rotting);
    }
}
    
Output:

Minimum Number of Minutes Required 4

Time Complexity: O ( n x n ) x 4    

Reason: Worst-case - We will be making each fresh orange rotten in the grid and for each rotten orange will check in 4 directions

Space Complexity: O ( n x n )

Reason: worst-case -  If all oranges are Rotten, we will end up pushing all rotten oranges into the Queue data structure
`,

                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/rotting-oranges/description/",
                            gfg: "https://www.geeksforgeeks.org/dsa/minimum-time-required-so-that-all-oranges-become-rotten/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Flood Fill",
                    content: [
                        {
                            heading: "Flood Fill",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "An image is represented by a 2-D array of integers, each integer representing the pixel value of the image. Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, \"flood fill\" the image. \n\n To perform a \"flood fill\", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same colour as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same colour as the starting pixel), and so on. Replace the colour of all of the aforementioned pixels with the newColor.",
                                },
                                {
                                    para: "\Pre-req:\ Connected Components, Graph traversal techniques",
                                    image: "/static/Graph38.png"
                                },
                                {
                                    subheading: "Explanation:",
                                    para: "From the centre of the image (with position (sr, sc) = (1, 1)), all pixels connected by a path of the same colour as the starting pixel are colored with the new colour. \n\n Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.",
                                    image: "/static/Graph39.gif",
                                },
                                {
                                    image: "/static/Graph40.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same colour as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same colour as the starting pixel), and so on. \n\n We know about both the traversals, Breadth First Search (BFS) and Depth First Search (DFS). We can follow BFS also, where we start at a given point and colour level wise, i.e., we go simultaneously to all its neighbours. We can use any of the traversals to solve this problem, in our case we will be using DFS just to explore multiple approaches.",
                                    image: "/static/Graph41.png"
                                },
                                {
                                    para: "In this way, “flood fill” will be performed. It doesn’t matter how we are colouring the pixels, we just want to colour all of the aforementioned pixels with the newColor. So, we can use any of the traversal techniques. \n\n Consider the following example to understand how DFS traverses the pixels and colours them accordingly.",
                                    image: "/static/Graph42.gif"
                                },
                                {
                                    subheading: "How to set boundaries for 4 directions?",
                                    para: "The 4 neighbours will have following indexes:",
                                },
                                {
                                    image: "/static/Graph43.png"
                                },
                                {
                                    para: "Now, either we can apply 4 conditions or follow the following method.  \n\n From the above image, it is clear that delta change in row is -1, +0, +1, +0. Similarly, the delta change in column is 0, +1, +0, -1.  So we can apply the same logic to find the neighbours of a particular pixel (<row, column>).",
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/C-2_uSRli8o",
                    code: `import java.util.*;

class Solution {

    // DFS function to fill the connected area
    private void dfs(int row, int col, int[][] image, int newColor, int iniColor) {
        int n = image.length;
        int m = image[0].length;

        // Check if the current cell is out of bounds or not the same color
        if(row < 0 || col < 0 || row >= n || col >= m || image[row][col] != iniColor) {
            return;
        }

        // Color the current cell
        image[row][col] = newColor;

        // Move in all four directions
        dfs(row - 1, col, image, newColor, iniColor); // Up
        dfs(row + 1, col, image, newColor, iniColor); // Down
        dfs(row, col - 1, image, newColor, iniColor); // Left
        dfs(row, col + 1, image, newColor, iniColor); // Right
    }

    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int iniColor = image[sr][sc];

        // If the starting pixel is already the new color, return it as is
        if(iniColor == newColor) return image;

        // Start DFS
        dfs(sr, sc, image, newColor, iniColor);

        return image;
    }

    public static void main(String[] args) {
        int[][] image = {
            {1,1,1},
            {1,1,0},
            {1,0,1}
        };

        Solution obj = new Solution();
        int[][] result = obj.floodFill(image, 1, 1, 2);

        // Print the final image
        for(int i = 0; i < result.length; i++) {
            for(int j = 0; j < result[0].length; j++) {
                System.out.print(result[i][j] + " ");
            }
            System.out.println();
        }
    }
}

    
Output:

2 2 2
2 2 0 
2 0 1


Time Complexity: O(NxM + NxMx4) ~ O(N x M)

For the worst case, all of the pixels will have the same colour, so DFS function will be called for (N x M) nodes and for every node we are traversing for 4 neighbours, so it will take O(N x M x 4) time.

Space Complexity: O(N x M) + O(N x M)

O(N x M) for copied input array and recursive stack space takes up N x M locations at max. `,

                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/flood-fill/description/",
                            gfg: "https://www.geeksforgeeks.org/dsa/flood-fill-algorithm/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Cycle Detection in unirected Graph",
                    content: [
                        {
                            heading: "Detect Cycle in an Undirected Graph (using BFS)",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given an undirected graph with V vertices and E edges, check whether it contains any cycle or not.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph44.png"
                                },
                                {
                                    image: "/static/Graph45.png",
                                },
                                {
                                    subheading: "Intuition",
                                    para: "The cycle in a graph starts from a node and ends at the same node. So we can think of two algorithms to do this, in this article we will be reading about the BFS, and in the next, we will be learning how to use DFS to check. \n\n Breadth First Search, BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level. \n\n The intuition is that we start from a node, and start doing BFS level-wise, if somewhere down the line, we visit a single node twice, it means we came via two paths to end up at the same node. It implies there is a cycle in the graph because we know that we start from different directions but can arrive at the same node only if the graph is connected or contains a cycle, otherwise we would never come to the same node again.",
                                },
                                {
                                    subheading: "Approach",
                                    para: "-> Queue: Define a queue and insert the source node along with parent data (<source node, parent>). For example, (2, 1) means 2 is the source node and 1 is its parent node. \n\n ->Visited array: an array initialized to 0 indicating unvisited nodes.",
                                },
                                {
                                    subheading: "The Algorithm steps are as follows:",
                                    para: "-> For BFS traversal, we need a queue data structure and a visited array. \n\n -> Push the pair of the source node and its parent data (<source, parent>) in the queue, and mark the node as visited. The parent will be needed so that we don’t do a backward traversal in the graph, we just move frontwards. \n\n -> Start the BFS traversal, pop out an element from the queue every time and travel to all its unvisited neighbors using an adjacency list. \n\n -> Repeat the steps either until the queue becomes empty, or a node appears to be already visited which is not the parent, even though we traveled in different directions during the traversal, indicating there is a cycle. \n\n -> If the queue becomes empty and no such node is found then there is no cycle in the graph. \n\n A graph can have connected components as well. In such cases, if any component forms a cycle then the graph is said to have a cycle. We can follow the algorithm for the same:",
                                },
                                {
                                    image: "/static/Graph46.png"
                                },
                                {
                                    image: "/static/Graph47.gif"
                                },
                            ]
                        },
                        {
                            heading: "Detect Cycle in an Undirected Graph (using DFS)",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given an undirected graph with V vertices and E edges, check whether it contains any cycle or not.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph48.png"
                                },
                                {
                                    image: "/static/Graph49.png",
                                },
                                {
                                    subheading: "Intuition",
                                    para: "The cycle in a graph starts from a node and ends at the same node. DFS is a traversal technique that involves the idea of recursion and backtracking. DFS goes in-depth, i.e., traverses all nodes by going ahead, and when there are no further nodes to traverse in the current path, then it backtracks on the same path and traverses other unvisited nodes. The intuition is that we start from a source and go in-depth, and reach any node that has been previously visited in the past; it means there's a cycle.",
                                },
                                {
                                    subheading: "Approach",
                                    para: "The algorithm steps are as follows: \n\n -> In the DFS function call make sure to store the parent data along with the source node, create a visited array, and initialize to 0. The parent is stored so that while checking for re-visited nodes, we don’t check for parents. \n\n -> We run through all the unvisited adjacent nodes using an adjacency list and call the recursive dfs function. Also, mark the node as visited \n\n -> If we come across a node that is already marked as visited and is not a parent node, then keep on returning true indicating the presence of a cycle; otherwise return false after all the adjacent nodes have been checked and we did not find a cycle. \n\n NOTE: We can call it a cycle only if the already visited node is a non-parent node because we cannot say we came to a node that was previously the parent node. \n\n -> For example, node 2 has two adjacent nodes 1 and 5. 1 is already visited but it is the parent node ( DFS(2, 1) ), So this cannot be called a cycle.",
                                    image: "/static/Graph50.png"
                                },
                                {
                                    para: "Node 3 has three adjacent nodes, where 4 and 6 are already visited but node 1 is not visited by node 3, but it’s already marked as visited and is a non-parent node ( DFS(3, 6) ), indicating the presence of cycle.",
                                },
                                {
                                    image: "/static/Graph51.png"
                                },
                                {
                                    subheading: "Pseudocode:",
                                    image: "/static/Graph52.png"
                                },
                                {
                                    para: "Consider the following graph and its adjacency list.",
                                    image: "/static/Graph53.png",
                                },
                                {
                                    image: "/static/Graph54.gif",
                                }
                            ]
                        }
                    ],
                    video: "https://youtu.be/BPlrALf1LDU",
                    code: `


--------------------------------------------------------
|  Cycle Detection in an Undirected Graph (using BFS)  |
--------------------------------------------------------



import java.util.*;
class Solution {

    // Helper method to check for cycle using BFS
    private boolean hasCycle(ArrayList<ArrayList<Integer>> adj, int start, boolean[] visited) {
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(start, -1));
        visited[start] = true;

        while (!queue.isEmpty()) {
            Pair current = queue.poll();
            int node = current.node;
            int parent = current.parent;

            for (int neighbor : adj.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.add(new Pair(neighbor, node));
                } else if (neighbor != parent) {
                    return true; // Cycle detected
                }
            }
        }
        return false;
    }

    // Main method to detect cycle in the graph
    public boolean isCycle(int V, ArrayList<ArrayList<Integer>> adj) {
        boolean[] visited = new boolean[V];
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                if (hasCycle(adj, i, visited)) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int V = 4;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Adding edges
        adj.get(1).add(2);
        adj.get(2).add(1);
        adj.get(2).add(3);
        adj.get(3).add(2);

        Solution solution = new Solution();
        boolean ans = solution.isCycle(V, adj);

        System.out.println(ans ? "1" : "0");
    }
}

// Helper class to store node and its parent in BFS
class Pair {
    int node;
    int parent;

    public Pair(int node, int parent) {
        this.node = node;
        this.parent = parent;
    }
}


--------------------------------------------------------
|  Cycle Detection in an Undirected Graph (using DFS)  |
--------------------------------------------------------



import java.util.*;

class Solution {

    // Helper method to check for cycle using DFS
    private boolean hasCycleDFS(int node, int parent, ArrayList<ArrayList<Integer>> adj, boolean[] visited) {
        visited[node] = true;

        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                if (hasCycleDFS(neighbor, node, adj, visited)) {
                    return true;
                }
            } else if (neighbor != parent) {
                return true; // Cycle detected
            }
        }
        return false;
    }

    // Main method to detect cycle in the graph
    public boolean isCycle(int V, ArrayList<ArrayList<Integer>> adj) {
        boolean[] visited = new boolean[V];

        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                if (hasCycleDFS(i, -1, adj, visited)) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int V = 4;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Adding edges
        adj.get(1).add(2);
        adj.get(2).add(1);
        adj.get(2).add(3);
        adj.get(3).add(2);

        Solution solution = new Solution();
        boolean ans = solution.isCycle(V, adj);

        System.out.println(ans ? "1" : "0");
    }
}



Output:  0

Time Complexity: O(N + 2E) + O(N), Where N = Nodes, 2E is for total degrees as we traverse all adjacent nodes. In the case of connected components of a graph, it will take another O(N) time.

Space Complexity: O(N) + O(N) ~ O(N), Space for queue data structure and visited array.`,

                    AdditionalResources: [
                        {
                            leetcode: "",
                            gfg: "https://www.geeksforgeeks.org/dsa/detect-cycle-in-an-undirected-graph-using-bfs/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
            ]
        },
        {
            Subsection: "Lec 3: Problems on Topo Sort",
            content: [
                {
                    Topic: "Topo Sort",
                    content: [
                        {
                            heading: "Topological Sort Algorithm with (DFS & Stack)",
                            content: [
                                {
                                    subheading: "Problem Statement:",
                                    para: "Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph."
                                },
                                {
                                    subheading: "Note:",
                                    para: "In topological sorting, node u will always appear before node v if there is a directed edge from node u towards node v(u -> v)."
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph55.png"
                                },
                                {
                                    image: "/static/Graph56.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "Topological sorting only exists in Directed Acyclic Graph (DAG). If the nodes of a graph are connected through directed edges and the graph does not contain a cycle, it is called a directed acyclic graph(DAG). \n\n The topological sorting of a directed acyclic graph is nothing but the linear ordering of vertices such that if there is an edge between node u and v(u -> v), node u appears before v in that ordering. \n\n Now, let's understand Why topological sort only exists in DAG: \n\n -> Case 1 (If the edges are undirected): If there is an undirected edge between node u and v, it signifies that there is an edge from node u to v(u -> v) as well as there is an edge from node v to u(v -> u). But according to the definition of topological sorting, it is practically impossible to write such ordering where u appears before v and v appears before u simultaneously. So, it is only possible for directed edges. \n\n -> Case 2(If the directed graph contains a cycle): The following directed graph contains a cycle:",
                                    image: "/static/Graph57.png"
                                },
                                {
                                    image: "/static/Graph58.png"
                                },
                                {
                                    subheading: "Intuition",
                                    para: "Since we are inserting the nodes into the stack after the completion of the traversal, we are making sure, there will be no one who appears afterward but may come before in the ordering as everyone during the traversal would have been inserted into the stack."
                                },
                                {
                                    subheading: "Note:",
                                    para: "Points to remember, that node will be marked as visited immediately after making the DFS call and before returning from the DFS call, the node will be pushed into the stack."
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/5lZ0iJMrUMk",
                    code: `import java.util.*;

class Solution {
    private static void dfs(int node, int vis[], Stack<Integer> st,
            ArrayList<ArrayList<Integer>> adj) {
        vis[node] = 1;
        for (int it : adj.get(node)) {
            if (vis[it] == 0)
                dfs(it, vis, st, adj);
        }
        st.push(node);
    }

    // Function to return list containing vertices in Topological order.
    static int[] topoSort(int V, ArrayList<ArrayList<Integer>> adj) {
        int vis[] = new int[V];
        Stack<Integer> st = new Stack<Integer>();
        for (int i = 0; i < V; i++) {
            if (vis[i] == 0) {
                dfs(i, vis, st, adj);
            }
        }

        int ans[] = new int[V];
        int i = 0;
        while (!st.isEmpty()) {
            ans[i++] = st.peek();
            st.pop();
        }
        return ans;
    }
}

public class tUf {
    public static void main(String[] args) {
        int V = 6;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        adj.get(2).add(3);
        adj.get(3).add(1);
        adj.get(4).add(0);
        adj.get(4).add(1);
        adj.get(5).add(0);
        adj.get(5).add(2);

        int[] ans = Solution.topoSort(V, adj);
        for (int node : ans) {
            System.out.print(node + " ");
        }
        System.out.println("");
    }
}
    


Output: 5 4 2 3 1 0

Time Complexity: O(V+E)+O(V), where V = no. of nodes and E = no. of edges. There can be at most V components. So, another O(V) time complexity.

Space Complexity: O(2N) + O(N) ~ O(2N): O(2N) for the visited array and the stack carried during DFS calls and O(N) for recursive stack space, where N = no. of nodes.

`,
                    AdditionalResources: [
                        {
                            leetcode: "https://www.geeksforgeeks.org/problems/topological-sort/1",
                            gfg: "https://www.geeksforgeeks.org/dsa/topological-sorting/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Kahn's Algorithm",
                    content: [
                        {
                            heading: "Kahn's Algorithm | Topological Sort Algorithm with (BFS & Queue)",
                            content: [
                                {
                                    subheading: "Problem Statement:",
                                    para: "Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph."
                                },
                                {
                                    subheading: "Note:",
                                    para: "In topological sorting, node u will always appear before node v if there is a directed edge from node u towards node v(u -> v)."
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph55.png"
                                },
                                {
                                    image: "/static/Graph56.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "Topological sorting only exists in Directed Acyclic Graph (DAG). If the nodes of a graph are connected through directed edges and the graph does not contain a cycle, it is called a directed acyclic graph(DAG). \n\n The topological sorting of a directed acyclic graph is nothing but the linear ordering of vertices such that if there is an edge between node u and v(u -> v), node u appears before v in that ordering. \n\n Now, let's understand Why topological sort only exists in DAG: \n\n -> Case 1 (If the edges are undirected): If there is an undirected edge between node u and v, it signifies that there is an edge from node u to v(u -> v) as well as there is an edge from node v to u(v -> u). But according to the definition of topological sorting, it is practically impossible to write such ordering where u appears before v and v appears before u simultaneously. So, it is only possible for directed edges. \n\n -> Case 2(If the directed graph contains a cycle): The following directed graph contains a cycle:",
                                    image: "/static/Graph59.png"
                                },
                                {
                                    subheading: "Approach",
                                    para: "Previously, we solved this question using the DFS traversal technique. But in this article,  we will apply the BFS(Breadth First Search) traversal technique. Breadth First Search or BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level."
                                },
                                {
                                    subheading: "Initial Configuration",
                                    para: "Indegree Array: Initially all elements are set to 0. Then, We will count the incoming edges for a node and store it in this array. For example, if indegree of node 3 is 2, indegree[3] = 2. \n\n -> Queue: As we will use BFS, a queue is required. Initially, the node with indegree 0 will be pushed into the queue. \n\n -> Answer array: Initially empty and is used to store the linear ordering."
                                },
                                {
                                    subheading: "The algorithm steps are as follows:",
                                    para: "First, we will calculate the indegree of each node and store it in the indegree array. We can iterate through the given adj list, and simply for every node u->v, we can increase the indegree of v by 1 in the indegree array. \n\n  -> Initially, there will be always at least a single node whose indegree is 0. So, we will push the node(s) with indegree 0 into the queue. \n\n -> Then, we will pop a node from the queue including the node in our answer array, and for all its adjacent nodes, we will decrease the indegree of that node by one. For example, if node u that has been popped out from the queue has an edge towards node v(u->v), we will decrease indegree[v] by 1. \n\n -> After that, if for any node the indegree becomes 0, we will push that node again into the queue. \n\n -> We will repeat steps 3 and 4 until the queue is completely empty. Finally, completing the BFS we will get the linear ordering of the nodes in the answer array.",
                                },
                                {
                                    subheading: "Let’s understand how to find the indegree(s): ",
                                    para: "By visiting the adjacency list, we can find out the indegrees for each node. For example, if node 3 is an adjacent node of node 2, we will just increase indegree[3] by 1 as the adjacency list suggests that node 3 has an incoming edge from node 2. \n\n Note: If you wish to see the dry run of the above approach, you can watch the video attached to this article. \n\n Let’s quickly understand the algorithm using the below graph:",
                                    image: "/static/Graph60.png",
                                },
                                {
                                    image: "/static/Graph61.png",
                                }
                            ]
                        }
                    ],
                    video: "https://youtu.be/XMiIk1B0v-w",
                    code: `import java.util.*;

class Solution {
    // Function to return list containing vertices in Topological order.
    static int[] topoSort(int V, ArrayList<ArrayList<Integer>> adj) {
        int indegree[] = new int[V];
        for (int i = 0; i < V; i++) {
            for (int it : adj.get(i)) {
                indegree[it]++;
            }
        }

        Queue<Integer> q = new LinkedList<Integer>();
        ;
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }

        int topo[] = new int[V];
        int i = 0;
        while (!q.isEmpty()) {
            int node = q.peek();
            q.remove();
            topo[i++] = node;
            // node is in your topo sort
            // so please remove it from the indegree

            for (int it : adj.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) {
                    q.add(it);
                }
            }
        }

        return topo;
    }
}

public class tUf {
    public static void main(String[] args) {
        int V = 6;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        adj.get(2).add(3);
        adj.get(3).add(1);
        adj.get(4).add(0);
        adj.get(4).add(1);
        adj.get(5).add(0);
        adj.get(5).add(2);

        int[] ans = Solution.topoSort(V, adj);
        for (int node : ans) {
            System.out.print(node + " ");
        }
        System.out.println("");
    }
}

    


Output: 4 5 0 2 3 1

Time Complexity: O(V+E), where V = no. of nodes and E = no. of edges. This is a simple BFS algorithm.

Space Complexity: O(N) + O(N) ~ O(2N), O(N) for the indegree array, and O(N) for the queue data structure used in BFS(where N = no.of nodes).



`,
                    AdditionalResources: [
                        {
                            leetcode: "https://www.geeksforgeeks.org/problems/topological-sort/1",
                            gfg: "https://www.geeksforgeeks.org/dsa/topological-sorting-indegree-based-solution/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Course Schedule I",
                    content: [
                        {
                            heading: "Course Schedule I",
                            content: [
                                {
                                    subheading: "Problem Statement I (Course Schedule):",
                                    para: "There are a total of n tasks you have to pick, labeled from 0 to n-1. Some tasks may have prerequisites tasks, for example, to pick task 0 you have to first finish tasks 1, which is expressed as a pair: [0, 1] \n\n Given the total number of n tasks and a list of prerequisite pairs of size m. Find the order of tasks you should pick to finish all tasks. \n\n Note: There may be multiple correct orders, you need to return one of them. If it is impossible to finish all tasks, return an empty array."
                                },
                                {
                                    subheading: "Problem Statement II (Pre-requisite Tasks): ",
                                    para: "There are a total of N tasks, labeled from 0 to N-1. Some tasks may have prerequisites, for example, to do task 0 you have to first complete task 1, which is expressed as a pair: [0, 1] \n\n Given the total number of tasks N and a list of prerequisite pairs P, find if it is possible to finish all tasks."
                                },
                                {
                                    subheading: "Notes:",
                                    para: "These two questions are linked. The second question asks if it is possible to finish all the tasks and the first question states to return the ordering of the tasks if it is possible to perform all the tasks, otherwise return an empty array."
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph62.png"
                                },
                                {
                                    image: "/static/Graph63.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "The solutions will be similar for both questions as we need to check for one, and in the other, we need to print the order. The questions state that the given pairs signify the dependencies of tasks. For example, the pair {u, v} signifies that to perform task v, first we need to finish task u. Now, if we closely observe, we can think of a directed edge between u and v(u -> v) where u and v are two nodes. Now, if we can think of each task as a node and every pair as a directed edge between those two nodes, the whole problem becomes a graph problem. \n\n Now, let’s analyze the examples from the graph point of view: \n\n For example 1, the number of tasks(considered as nodes) is 4, and pairs(considered as edges) are 3. If we draw the graph accordingly, the following illustration is produced:",
                                    image: "/static/Graph64.png"
                                },
                                {
                                    para: "Analyzing the graphs, we can conclude that performing all the tasks from the first set is possible because the first graph does not contain any cycle but as the second graph contains a cycle, performing all the tasks from the second set is impossible(there exists a cyclic dependency between the tasks). So, first, we need to identify a graph as a directed acyclic graph and if it is so we need to find out the linear ordering of the nodes as well(second part for the question: Course schedule). \n\n Now, we have successfully reduced the problem to one of our known concepts: Detect cycle in a directed graph. We will solve this problem using the Topological Sort Algorithm or Kahn’s Algorithm. \n\n Topological sorting only exists in Directed Acyclic Graph (DAG). If the nodes of a graph are connected through directed edges and the graph does not contain a cycle, it is called a directed acyclic graph(DAG). \n\n The topological sorting of a directed acyclic graph is nothing but the linear ordering of vertices such that if there is an edge between node u and v(u -> v), node u appears before v in that ordering. \n\n For the second problem, we can also apply the algorithm used in the detection of cycles in a directed graph (using DFS) where we used to find out if the graph has a cycle or not. But to solve the first question we have to figure out the linear ordering of the task as well. So, we will use the topological sort algorithm for both questions.",
                                },
                                {
                                    subheading: "Initial",
                                    para: "For problem I, the intuition is to find the linear ordering in which the tasks will be performed if it is possible to perform all the tasks otherwise, to return an empty array. \n\n For problem II, the intuition is to find if it is possible to perform all the tasks(i.e. The graph contains a cycle or not)."
                                },
                                {
                                    subheading: "Approach",
                                    para: "We will apply the BFS(Breadth First Search) traversal technique. Breadth First Search or BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level.",
                                },
                                {
                                    subheading: "Initial Configuration",
                                    para: "Indegree Array: Initially all elements are set to 0. Then, We will count the incoming edges for a node and store it in this array. For example, if the indegree of node 3 is 2, indegree[3] = 2. \n\n -> Queue: As we will use BFS, a queue is required. Initially, the node with indegree 0 will be pushed into the queue. \n\n -> Answer array: Initially empty and is used to store the linear ordering."
                                },
                                {
                                    subheading: "The algorithm steps are as follows:",
                                    para: "-> First, we will form the adjacency list of the graph using the pairs. For example, for the pair {u, v} we will add node v as an adjacent node of u in the list. \n\n ->Then, we will calculate the in-degree of each node and store it in the indegree array. We can iterate through the given adj list, and simply for every node u->v, we can increase the indegree of v by 1 in the indegree array. \n\n -> Initially, there will be always at least a single node whose indegree is 0. So, we will push the node(s) with indegree 0 into the queue. \n\n -> Then, we will pop a node from the queue including the node in our answer array, and for all its adjacent nodes, we will decrease the indegree of that node by one. For example, if node u that has been popped out from the queue has an edge towards node v(u->v), we will decrease indegree[v] by 1. \n\n -> After that, if for any node the indegree becomes 0, we will push that node again into the queue. \n\n -> We will repeat steps 3 and 4 until the queue is completely empty. Now, completing the BFS we will get the linear ordering of the nodes in the answer array. \n\n -> For the first problem(Course Schedule): We will return the answer array if the length of the ordering equals the number of tasks. Otherwise, we will return an empty array. \n\n -> For the Second problem(Prerequisite tasks): We will return true if the length of the ordering equals the number of tasks. otherwise, we will return false. \n\n Note: If you wish to see the dry run of the above approach, you can watch the video attached to this article."
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/WAOfKpxYHR8",
                    code: `
                    
import java.util.*;

class Solution {
    static int[] findOrder(int n, int m, ArrayList<ArrayList<Integer>> prerequisites) {
        // Form a graph
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        for (int i = 0; i < m; i++) {
            adj.get(prerequisites.get(i).get(1)).add(prerequisites.get(i).get(0));
        }



        int indegree[] = new int[n];
        for (int i = 0; i < n; i++) {
            for (int it : adj.get(i)) {
                indegree[it]++;
            }
        }


        Queue<Integer> q = new LinkedList<Integer>();
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }


        int topo[] = new int[n];
        int ind = 0;
        // o(v + e)
        while (!q.isEmpty()) {
            int node = q.peek();

            q.remove();
            topo[ind++] = node;
            // node is in your topo sort
            // so please remove it from the indegree

            for (int it : adj.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) q.add(it);
            }
        }


        if (ind == n) return topo;
        int[] arr = {};
        return arr;
    }
}

public class tUf {
    public static void main(String[] args) {
        int N = 4;
        int M = 3;
        ArrayList<ArrayList<Integer>> prerequisites = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            prerequisites.add(i, new ArrayList<>());
        }


        prerequisites.get(0).add(0);
        prerequisites.get(0).add(1);

        prerequisites.get(1).add(1);
        prerequisites.get(1).add(2);

        prerequisites.get(2).add(2);
        prerequisites.get(2).add(3);

        int[] ans = Solution.findOrder(N, M, prerequisites);

        for (int task : ans) {
            System.out.print(task + " ");
        }
        System.out.println("");
    }
}

Output: 3 2 1 0



--------------------------------------------
|        Code (Pre-requisite Tasks):       |
--------------------------------------------

import java.util.*;


class Solution {
    public boolean isPossible(int V, int[][] prerequisites) {
        // Form a graph
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        int m = prerequisites.length;
        for (int i = 0; i < m; i++) {
            adj.get(prerequisites[i][0]).add(prerequisites[i][1]);
        }



        int indegree[] = new int[V];
        for (int i = 0; i < V; i++) {
            for (int it : adj.get(i)) {
                indegree[it]++;
            }
        }


        Queue<Integer> q = new LinkedList<Integer>();
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }


        List<Integer> topo = new ArrayList<Integer>();
        // o(v + e)
        while (!q.isEmpty()) {
            int node = q.peek();

            q.remove();
            topo.add(node);
            // node is in your topo sort
            // so please remove it from the indegree

            for (int it : adj.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) q.add(it);
            }
        }


        if (topo.size() == V) return true;
        return false;

    }

}

public class tUf {
    public static void main(String[] args) {
        int N = 4;
        int[][] prerequisites = new int[3][2];
        prerequisites[0][0] = 1;
        prerequisites[0][1] = 0;

        prerequisites[1][0] = 2;
        prerequisites[1][1] = 1;

        prerequisites[2][0] = 3;
        prerequisites[2][1] = 2;

        Solution obj = new Solution();
        boolean ans = obj.isPossible(N, prerequisites);
        if (ans)
            System.out.println("YES");
        else
            System.out.println("NO");
    }
}




Output: YES

Time Complexity: O(V+E), where V = no. of nodes and E = no. of edges. This is a simple BFS algorithm.

Space Complexity: O(N) + O(N) ~ O(2N), O(N) for the indegree array, and O(N) for the queue data structure used in BFS(where N = no.of nodes). Extra O(N) for storing the topological sorting. Total ~ O(3N).


`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/course-schedule/description/",
                            gfg: "https://www.geeksforgeeks.org/competitive-programming/cses-solutions-course-schedule/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Find Eventual Safe States - BFS",
                    content: [
                        {
                            heading: "Course Schedule I",
                            content: [
                                {
                                    subheading: "Problem Statement I (Course Schedule):",
                                    para: "A directed graph of V vertices and E edges is given in the form of an adjacency list adj. Each node of the graph is labeled with a distinct integer in the range 0 to V - 1. A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node. You have to return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph65.png"
                                },
                                {
                                    image: "/static/Graph66.png"
                                },
                                {
                                    subheading: "Solution",
                                    para: "A terminal node is a node without any outgoing edges(i.e outdegree = 0). Now a node is considered to be a safe node if all possible paths starting from it lead to a terminal node. Here we need to find out all safe nodes and return them sorted in ascending order. If we closely observe, all possible paths starting from a node are going to end at some terminal node unless there exists a cycle and the paths return back to themselves. Let’s understand it considering the below graph:",
                                    image: "/static/Graph67.png"
                                },
                                {
                                    para: "So, the intuition is to figure out the nodes which are neither a part of a cycle nor connected to the cycle. We have previously solved this problem using the DFS traversal technique. Now, we are going to solve it using the BFS traversal technique especially using the topological sort algorithm. The topological sort algorithm will automatically exclude the nodes which are either forming a cycle or connected to a cycle. Note: Points to remember that any node which is a part of a cycle or leads to the cycle through an incoming edge towards the cycle, cannot be a safe node. Apart from these types of nodes, every node is a safe node.",
                                },
                                {
                                    subheading: "Approach",
                                    para: "The node with outdegree 0 is considered to be a terminal node but the topological sort algorithm deals with the indegrees of the nodes. So, to use the topological sort algorithm, we will reverse every edge of the graph. Now, the nodes with indegree 0 become the terminal nodes. After this step, we will just follow the topological sort algorithm as it is.",
                                    image: "/static/Graph68.png"
                                },
                                {
                                    para: "We will apply the BFS(Breadth First Search) traversal technique. Breadth First Search or BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level.",
                                },
                                {
                                    subheading: "Initial Configuration",
                                    para: "Indegree Array: Initially all elements are set to 0. Then, We will count the incoming edges for a node and store it in this array. For example, if indegree of node 3 is 2, indegree[3] = 2. If you don’t know how to find indegrees, you can refer to the step 2 in the algorithm. \n\n Queue: As we will use BFS, a queue is required. Initially, the node with indegree 0 will be pushed into the queue.",
                                },
                                {
                                    subheading: "The Algorithm steps are as follows:",
                                    para: "-> First, we will reverse all the edges of the graph so that we can apply the topological sort algorithm afterward. \n\n -> Then, we will calculate the indegree of each node and store it in the indegree array. We can iterate through the given adj list, and simply for every node u->v, we can increase the indegree of v by 1 in the indegree array \n\n -> Then, we will push the node(s) with indegree 0 into the queue. \n\n -> Then, we will pop a node from the queue including the node in our safeNodes array, and for all its adjacent nodes, we will decrease the indegree of that node by one. For example, if node u that has been popped out from the queue has an edge towards node v(u->v), we will decrease indegree[v] by 1. \n\n -> After that, if for any node the indegree becomes 0, we will push that node again into the queue. \n\n -> We will repeat steps 3 and 4 until the queue is completely empty. Finally, completing the BFS we will get the linear ordering of the nodes in the safeNodes array. \n\n -> Finally, the safeNodes array will only consist of the nodes that are neither a part of any cycle nor connected to any cycle. Then we will sort the final safeNodes array as the question requires the answer in sorted order. \n\n -> Note: If you wish to see the dry run of the above approach, you can watch the video attached to this article."
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/2gtg3VsDGyc",
                    code: `
                    
import java.util.*;


class Solution {
    List<Integer> eventualSafeNodes(int V, List<List<Integer>> adj) {
        List<List<Integer>> adjRev = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adjRev.add(new ArrayList<>());
        }
        int indegree[] = new int[V];
        for (int i = 0; i < V; i++) {
            // i -> it
            // it -> i
            for (int it : adj.get(i)) {
                adjRev.get(it).add(i);
                indegree[i]++;
            }
        }
        Queue<Integer> q = new LinkedList<>();
        List<Integer> safeNodes = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }

        while (!q.isEmpty()) {
            int node = q.peek();
            q.remove();
            safeNodes.add(node);
            for (int it : adjRev.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) q.add(it);
            }
        }
        Collections.sort(safeNodes);
        return safeNodes;
    }
}

public class tUf {
    public static void main(String[] args) {
        int V = 12;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        adj.get(0).add(1);
        adj.get(1).add(2);
        adj.get(2).add(3);
        adj.get(2).add(4);
        adj.get(3).add(4);
        adj.get(3).add(5);
        adj.get(4).add(6);
        adj.get(5).add(6);
        adj.get(6).add(7);
        adj.get(8).add(1);
        adj.get(8).add(9);
        adj.get(9).add(10);
        adj.get(10).add(8);
        adj.get(11).add(9);

        Solution obj = new Solution();
        List<Integer> safeNodes = obj.eventualSafeNodes(V, adj);

        for (int node : safeNodes) {
            System.out.print(node + " ");
        }
        System.out.println("");
    }
}


Output : 0 1 2 3 4 5 6 7

Time Complexity: O(V+E)+O(N*logN), where V = no. of nodes and E = no. of edges. This is a simple BFS algorithm. Extra O(N*logN) for sorting the safeNodes array, where N is the number of safe nodes.

Space Complexity: O(N) + O(N) + O(N) ~ O(3N), O(N) for the indegree array, O(N) for the queue data structure used in BFS(where N = no.of nodes), and extra O(N) for the adjacency list to store the graph in a reversed order.




`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/find-eventual-safe-states/description/",
                            gfg: "https://www.geeksforgeeks.org/dsa/eventual-safe-states/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
                {
                    Topic: "Alien Dictionary",
                    content: [
                        {
                            heading: "Alien Dictionary",
                            content: [
                                {
                                    subheading: "Problem Statement",
                                    para: "Given a sorted dictionary of an alien language having N words and k starting alphabets of a standard dictionary. Find the order of characters in the alien language \n\n Note: Many orders may be possible for a particular test case, thus you may return any valid order.",
                                },
                                {
                                    subheading: "Examples",
                                    image: "/static/Graph69.png"
                                },
                                {
                                    image: "/static/Graph70.png"
                                },
                                {
                                    subheading: "Solution",
                                    image: "/static/Graph71.png"
                                },
                                {
                                    image: "/static/Graph72.png"
                                },
                                {
                                    subheading: "The follow-up question for the interview:",
                                    para: "When is the ordering not possible? \n\n There are two such cases when ordering is not possible: \n\n -> If every character matches and the largest word appears before the shortest word: For example, if “abcd” appears before “abc”, we can say the ordering is not possible. \n\n -> If there exists a cyclic dependency between the characters: For example, in the dictionary: dict: {“abc”, “bat”, “ade”} there exists a cyclic dependency between ‘a’ and ‘b’ because the dictionary states ‘a’ < ‘b’ < ‘a’, which is not possible.",
                                },
                                {
                                    subheading: "Approach",
                                    para: "We will apply the BFS(Breadth First Search) traversal technique. Breadth First Search or BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level.",
                                },
                                {
                                    subheading: "Initial Configuration",
                                    para: "-> Adjacency List: Initially it will be empty and we will create this adjacency list comparing the consecutive pair of words. \n\n -> Indegree Array: Initially all elements are set to 0. Then, We will count the incoming edges for a node and store it in this array. For example, if the indegree of node 3 is 2, indegree[3] = 2. \n\n -> Queue: As we will use BFS, a queue is required. Initially, the node with indegree 0 will be pushed into the queue. \n\n -> Answer array(topo): Initially empty and is used to store the linear ordering.",
                                },
                                {
                                    subheading: "The Algorithm steps are as follows:",
                                    image: "/static/Graph73.png"
                                },
                            ]
                        }
                    ],
                    video: "https://youtu.be/U3N_je7tWAs",
                    code: `
                    
import java.util.*;


class Solution {
    private List<Integer> topoSort(int V, List<List<Integer>> adj) {
        int indegree[] = new int[V];
        for (int i = 0; i < V; i++) {
            for (int it : adj.get(i)) {
                indegree[it]++;
            }
        }

        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }
        List<Integer> topo = new ArrayList<>();
        while (!q.isEmpty()) {
            int node = q.peek();
            q.remove();
            topo.add(node);
            // node is in your topo sort
            // so please remove it from the indegree

            for (int it : adj.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) q.add(it);
            }
        }

        return topo;
    }
    public String findOrder(String [] dict, int N, int K) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < K; i++) {
            adj.add(new ArrayList<>());
        }


        for (int i = 0; i < N - 1; i++) {
            String s1 = dict[i];
            String s2 = dict[i + 1];
            int len = Math.min(s1.length(), s2.length());
            for (int ptr = 0; ptr < len; ptr++) {
                if (s1.charAt(ptr) != s2.charAt(ptr)) {
                    adj.get(s1.charAt(ptr) - 'a').add(s2.charAt(ptr) - 'a');
                    break;
                }
            }
        }

        List<Integer> topo = topoSort(K, adj);
        String ans = "";
        for (int it : topo) {
            ans = ans + (char)(it + (int)('a'));
        }

        return ans;

    }
}

public class tUf {
    public static void main(String[] args) {
        int N = 5, K = 4;
        String[] dict = {"baa", "abcd", "abca", "cab", "cad"};
        Solution obj = new Solution();
        String ans = obj.findOrder(dict, N, K);

        for (int i = 0; i < ans.length(); i++) {
            System.out.print(ans.charAt(i) + " ");
        }
        System.out.println("");
    }
}


Output: b d a c 

Time Complexity: O(N*len)+O(K+E), where N is the number of words in the dictionary, ‘len’ is the length up to the index where the first inequality occurs, K = no. of nodes, and E = no. of edges.

Space Complexity: O(K) + O(K)+O(K)+O(K) ~ O(4K), O(K) for the indegree array, and O(K) for the queue data structure used in BFS(where K = no.of nodes), O(K) for the answer array and O(K) for the adjacency list used in the algorithm.
`,
                    AdditionalResources: [
                        {
                            leetcode: "https://leetcode.com/problems/alien-dictionary/editorial/",
                            gfg: "https://www.geeksforgeeks.org/dsa/given-sorted-dictionary-find-precedence-characters/",
                            VisuAlgo: "https://visualgo.net/en/graphds",
                            youtubePlaylist: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
                        },
                    ]
                },
            ]
        },
    ],
};

export default dsaData;

const ComputerNetworkData = [
    {
      id: 'cn_intro',
      title: 'Introduction to Computer Networks',
      topics: [
        'Definition of Computer Networks',
        'Importance and Applications of Networks',
        'Types of Networks (LAN, MAN, WAN, PAN)',
        'Network Topologies (Bus, Star, Ring, Mesh, Hybrid)',
        'Network Devices (Hub, Switch, Router, Gateway)'
      ]
    },
    {
      id: 'osi_model',
      title: 'OSI Model',
      topics: [
        'Concept and Need for OSI Model',
        '7 Layers of OSI with Functions'
      ]
    },
    {
      id: 'tcp_ip_model',
      title: 'TCP/IP Model',
      topics: [
        'Concept and History of TCP/IP Model',
        'Layers of TCP/IP Model (4 Layers)',
        'OSI vs. TCP/IP Comparison'
      ]
    },
    {
      id: 'physical_layer',
      title: 'Physical Layer',
      topics: [
        'Transmission Media (Wired & Wireless)',
        'Encoding and Modulation Techniques',
        'Data Transmission Modes (Simplex, Half-duplex, Full-duplex)'
      ]
    },
    {
      id: 'data_link_layer',
      title: 'Data Link Layer',
      topics: [
        'Functions of Data Link Layer',
        'Framing and Error Detection',
        'Error Correction Techniques',
        'Flow Control Methods',
        'MAC Addressing',
        'Protocols (PPP, HDLC, Ethernet)',
        'Switching Techniques',
        'ARP & RARP Protocols'
      ]
    },
    {
      id: 'network_layer',
      title: 'Network Layer',
      topics: [
        'Functions of Network Layer',
        'Logical Addressing (IP Addressing: IPv4 & IPv6)',
        'Subnetting and Supernetting',
        'Routing Algorithms (Distance Vector, Link State)',
        'Routing Protocols (RIP, OSPF, BGP)',
        'Packet Forwarding and Switching',
        'ICMP Protocol',
        'NAT (Network Address Translation)',
        'Congestion Control at Network Layer',
        'QoS (Quality of Service)'
      ]
    },
    {
      id: 'transport_layer',
      title: 'Transport Layer',
      topics: [
        'Functions of Transport Layer',
        'Connection-Oriented vs. Connectionless Services',
        'TCP Protocol (Features, Header, Working)',
        'UDP Protocol (Features, Uses)',
        'Flow Control (Sliding Window, Congestion Control)',
        'Error Control at Transport Layer'
      ]
    },
    {
      id: 'session_layer',
      title: 'Session Layer',
      topics: [
        'Role of Session Layer (Dialog Control, Synchronization)'
      ]
    },
    {
      id: 'presentation_layer',
      title: 'Presentation Layer',
      topics: [
        'Data Translation, Encryption, Compression'
      ]
    },
    {
      id: 'application_layer',
      title: 'Application Layer',
      topics: [
        'Functions of Application Layer',
        'HTTP/HTTPS Protocols',
        'FTP & SMTP Protocols',
        'DNS (Domain Name System)',
        'DHCP (Dynamic Host Configuration Protocol)',
        'SNMP (Simple Network Management Protocol)'
      ]
    },
    {
      id: 'network_security',
      title: 'Network Security',
      topics: [
        'Security Threats (Viruses, Worms, DoS, Phishing)',
        'Cryptography (Symmetric & Asymmetric)',
        'Digital Signatures & Certificates',
        'Authentication Protocols',
        'Firewalls & IDS/IPS',
        'VPN (Virtual Private Network)',
        'SSL/TLS Protocols',
        'Cybersecurity Practices & Policies'
      ]
    },
    {
      id: 'network_troubleshooting',
      title: 'Network Troubleshooting',
      topics: [
        'Common Network Problems',
        'Tools for Troubleshooting (ping, tracert, netstat, nslookup, Wireshark)',
        'Troubleshooting Methodologies (Top-Down, Bottom-Up, Divide & Conquer)'
      ]
    }
  ];
  
  export default ComputerNetworkData;
  
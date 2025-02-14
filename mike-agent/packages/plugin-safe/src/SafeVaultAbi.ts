export default [
    {
      type: "constructor",
      inputs: [
        
      ],
      stateMutability: "nonpayable"
    },
    {
      type: "function",
      name: "UnlockVault",
      inputs: [
        
      ],
      outputs: [
        
      ],
      stateMutability: "nonpayable"
    },
    {
      type: "function",
      name: "initialize",
      inputs: [
        {
          name: "owner",
          type: "address",
          internalType: "address"
        }
      ],
      outputs: [
        
      ],
      stateMutability: "nonpayable"
    },
    {
      type: "function",
      name: "lastAccessTime",
      inputs: [
        
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256"
        }
      ],
      stateMutability: "view"
    },
    {
      type: "function",
      name: "owner",
      inputs: [
        
      ],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address"
        }
      ],
      stateMutability: "view"
    },
    {
      type: "function",
      name: "renounceOwnership",
      inputs: [
        
      ],
      outputs: [
        
      ],
      stateMutability: "nonpayable"
    },
    {
      type: "function",
      name: "transferOwnership",
      inputs: [
        {
          name: "newOwner",
          type: "address",
          internalType: "address"
        }
      ],
      outputs: [
        
      ],
      stateMutability: "nonpayable"
    },
    {
      type: "event",
      name: "Initialized",
      inputs: [
        {
          name: "version",
          type: "uint64",
          indexed: false,
          internalType: "uint64"
        }
      ],
      anonymous: false
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          name: "previousOwner",
          type: "address",
          indexed: true,
          internalType: "address"
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address"
        }
      ],
      anonymous: false
    },
    {
      type: "event",
      name: "UnlockVaultSignal",
      inputs: [
        {
          name: "timestamp",
          type: "uint256",
          indexed: false,
          internalType: "uint256"
        }
      ],
      anonymous: false
    },
    {
      type: "error",
      name: "InvalidInitialization",
      inputs: [
        
      ]
    },
    {
      type: "error",
      name: "NotInitializing",
      inputs: [
        
      ]
    },
    {
      type: "error",
      name: "OwnableInvalidOwner",
      inputs: [
        {
          name: "owner",
          type: "address",
          internalType: "address"
        }
      ]
    },
    {
      type: "error",
      name: "OwnableUnauthorizedAccount",
      inputs: [
        {
          name: "account",
          type: "address",
          internalType: "address"
        }
      ]
    }
] as const;

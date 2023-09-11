---
title: "About SQL"
date: "2023/10/21"
image: "about-sql.jpg"
excerpt: "SQL is a special-purpose programming language designed for managing data in a relational database "
isFeatured: true
---

# SQL

Structured Query Language (SQL) S-Q-L, sometimes "sequel" for historical reasons, is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.

Introduced in the 1970s, SQL offered two main advantages over older read–write APIs such as ISAM or VSAM. Firstly, it introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, i.e., with or without an index.

## Programming examples

![Javascript Code](/images/posts/about-sql/sql-code1.png)

## Interoperability and standardization

### Overview

SQL implementations are incompatible between vendors and do not necessarily completely follow standards. In particular, date and time syntax, string concatenation, NULLs, and comparison case sensitivity vary from vendor to vendor. PostgreSQL and Mimer SQL strive for standards compliance, though PostgreSQL does not adhere to the standard in all cases. For example, the folding of unquoted names to lower case in PostgreSQL is incompatible with the SQL standard, which says that unquoted names should be folded to upper case. Thus, Foo should be equivalent to FOO not foo according to the standard.

### Reasons for incompatibility

Several reasons for the lack of portability between database systems include:

- The complexity and size of the SQL standard means that most implementers do not support the entire standard.
- The standard does not specify database behavior in several important areas (e.g., indices, file storage), leaving implementations to decide how to behave.
- The SQL standard precisely specifies the syntax that a conforming database system must implement. However, the standard's specification of the semantics of language constructs is less well-defined, leading to ambiguity
- Many database vendors have large existing customer bases; where the newer version of the SQL standard conflicts with the prior behavior of the vendor's database, the vendor may be unwilling to break backward compatibility.
- Little commercial incentive exists for vendors to make changing database suppliers easier (see vendor lock-in).
- Users evaluating database software tend to place other factors such as performance higher in their priorities than standards conformance.

## SQL data types

- predefined data types
- constructed types
- user-defined types.

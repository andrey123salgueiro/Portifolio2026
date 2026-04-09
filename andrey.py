import pandas as pd # type: ignore
import matplotlib.pyplot as plt # type: ignore

# Criando o banco de dados robusto
dados = pd.read_csv('filmes.csv')

# Transformando em DataFrame
df = pd.DataFrame(dados)

# Exibindo o DataFrame
print(df)

# Gráfico de barras das notas
plt.figure(figsize=(8,5))
plt.bar(df["Filme"], df["Nota"], color="skyblue")
plt.xlabel("Filmes")
plt.ylabel("Notas")
plt.title("Notas dos Filmes Assistidos")
plt.xticks(rotation=45)
plt.show()

# Gráfico de pizza por gênero
plt.figure(figsize=(6,6))
df["Gênero"].value_counts().plot.pie(autopct="%1.1f%%", colors=["lightcoral","gold","lightblue","lightgreen"])
plt.title("Distribuição dos Filmes por Gênero")
plt.ylabel("")  # remove o rótulo lateral
plt.show()

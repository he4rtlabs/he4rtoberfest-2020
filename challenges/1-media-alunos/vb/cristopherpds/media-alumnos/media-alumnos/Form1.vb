Public Class Form1
    Private Sub Label1_Click(sender As Object, e As EventArgs) Handles lblNota1.Click, lblTitle.Click, lblResultado.Click, lblMedia.Click

    End Sub

    Private Sub BtnCalcular_Click(sender As Object, e As EventArgs) Handles BtnCalcular.Click
        Dim n1, n2, n3, media As Double
        n1 = txtNota1.Text
        n2 = txtNota2.Text
        n3 = txtNota3.Text

        media = (n1 + n2 + n3) / 3
        lblResultado.Text = $"A media e:{media}"
        Clear()



    End Sub
    Function Clear()
        txtNota1.Text = ""
        txtNota2.Text = ""
        txtNota3.Text = ""

    End Function

End Class

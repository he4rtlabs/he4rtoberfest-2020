<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.PictureBox1 = New System.Windows.Forms.PictureBox()
        Me.BtnCalcular = New System.Windows.Forms.Button()
        Me.txtNota3 = New System.Windows.Forms.TextBox()
        Me.txtNota2 = New System.Windows.Forms.TextBox()
        Me.txtNota1 = New System.Windows.Forms.TextBox()
        Me.lblNota1 = New System.Windows.Forms.Label()
        Me.lblNota2 = New System.Windows.Forms.Label()
        Me.lblNota3 = New System.Windows.Forms.Label()
        Me.lblTitle = New System.Windows.Forms.Label()
        Me.lblMedia = New System.Windows.Forms.Label()
        Me.lblResultado = New System.Windows.Forms.Label()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'PictureBox1
        '
        Me.PictureBox1.Image = Global.media_alumnos.My.Resources.Resources.hkuQ4B0
        Me.PictureBox1.Location = New System.Drawing.Point(466, 33)
        Me.PictureBox1.Name = "PictureBox1"
        Me.PictureBox1.Size = New System.Drawing.Size(304, 167)
        Me.PictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom
        Me.PictureBox1.TabIndex = 0
        Me.PictureBox1.TabStop = False
        '
        'BtnCalcular
        '
        Me.BtnCalcular.Location = New System.Drawing.Point(178, 292)
        Me.BtnCalcular.Name = "BtnCalcular"
        Me.BtnCalcular.Size = New System.Drawing.Size(121, 23)
        Me.BtnCalcular.TabIndex = 1
        Me.BtnCalcular.Text = "Calcular Media"
        Me.BtnCalcular.UseVisualStyleBackColor = True
        '
        'txtNota3
        '
        Me.txtNota3.Location = New System.Drawing.Point(220, 236)
        Me.txtNota3.Name = "txtNota3"
        Me.txtNota3.Size = New System.Drawing.Size(100, 20)
        Me.txtNota3.TabIndex = 2
        '
        'txtNota2
        '
        Me.txtNota2.Location = New System.Drawing.Point(220, 210)
        Me.txtNota2.Name = "txtNota2"
        Me.txtNota2.Size = New System.Drawing.Size(100, 20)
        Me.txtNota2.TabIndex = 2
        '
        'txtNota1
        '
        Me.txtNota1.Location = New System.Drawing.Point(220, 184)
        Me.txtNota1.Name = "txtNota1"
        Me.txtNota1.Size = New System.Drawing.Size(100, 20)
        Me.txtNota1.TabIndex = 2
        '
        'lblNota1
        '
        Me.lblNota1.AutoSize = True
        Me.lblNota1.Location = New System.Drawing.Point(175, 187)
        Me.lblNota1.Name = "lblNota1"
        Me.lblNota1.Size = New System.Drawing.Size(39, 13)
        Me.lblNota1.TabIndex = 3
        Me.lblNota1.Text = "Nota 1"
        '
        'lblNota2
        '
        Me.lblNota2.AutoSize = True
        Me.lblNota2.Location = New System.Drawing.Point(175, 213)
        Me.lblNota2.Name = "lblNota2"
        Me.lblNota2.Size = New System.Drawing.Size(39, 13)
        Me.lblNota2.TabIndex = 3
        Me.lblNota2.Text = "Nota 2"
        '
        'lblNota3
        '
        Me.lblNota3.AutoSize = True
        Me.lblNota3.Location = New System.Drawing.Point(175, 243)
        Me.lblNota3.Name = "lblNota3"
        Me.lblNota3.Size = New System.Drawing.Size(39, 13)
        Me.lblNota3.TabIndex = 3
        Me.lblNota3.Text = "Nota 3"
        '
        'lblTitle
        '
        Me.lblTitle.AutoSize = True
        Me.lblTitle.Font = New System.Drawing.Font("Segoe UI Black", 18.0!, CType((System.Drawing.FontStyle.Bold Or System.Drawing.FontStyle.Italic), System.Drawing.FontStyle), System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblTitle.Location = New System.Drawing.Point(172, 122)
        Me.lblTitle.Name = "lblTitle"
        Me.lblTitle.Size = New System.Drawing.Size(214, 32)
        Me.lblTitle.TabIndex = 3
        Me.lblTitle.Text = "Calculo de media"
        '
        'lblMedia
        '
        Me.lblMedia.AutoSize = True
        Me.lblMedia.Location = New System.Drawing.Point(328, 302)
        Me.lblMedia.Name = "lblMedia"
        Me.lblMedia.Size = New System.Drawing.Size(58, 13)
        Me.lblMedia.TabIndex = 3
        Me.lblMedia.Text = "Resultado:"
        '
        'lblResultado
        '
        Me.lblResultado.AutoSize = True
        Me.lblResultado.Location = New System.Drawing.Point(385, 302)
        Me.lblResultado.Name = "lblResultado"
        Me.lblResultado.Size = New System.Drawing.Size(12, 13)
        Me.lblResultado.TabIndex = 3
        Me.lblResultado.Text = "\"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.lblNota3)
        Me.Controls.Add(Me.lblNota2)
        Me.Controls.Add(Me.lblTitle)
        Me.Controls.Add(Me.lblResultado)
        Me.Controls.Add(Me.lblMedia)
        Me.Controls.Add(Me.lblNota1)
        Me.Controls.Add(Me.txtNota1)
        Me.Controls.Add(Me.txtNota2)
        Me.Controls.Add(Me.txtNota3)
        Me.Controls.Add(Me.BtnCalcular)
        Me.Controls.Add(Me.PictureBox1)
        Me.Name = "Form1"
        Me.Text = "Form1"
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents PictureBox1 As PictureBox
    Friend WithEvents BtnCalcular As Button
    Friend WithEvents txtNota3 As TextBox
    Friend WithEvents txtNota2 As TextBox
    Friend WithEvents txtNota1 As TextBox
    Friend WithEvents lblNota1 As Label
    Friend WithEvents lblNota2 As Label
    Friend WithEvents lblNota3 As Label
    Friend WithEvents lblTitle As Label
    Friend WithEvents lblMedia As Label
    Friend WithEvents lblResultado As Label
End Class
